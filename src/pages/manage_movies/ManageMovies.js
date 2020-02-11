import React from 'react'
import { connect } from 'react-redux'

import './manageMovies.css'

import Manager from '../../components/containers/manager'
import Table from '../../components/containers/table'

// import { ADD_MOVIE, GET_MOVIES, DELETE_MOVIE } from '../../action.types'
import { ADD_Movie, GET_Movies, DELETE_Movie} from '../../redux/actions';

class ManageMovies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieFormData: {
                title: '',
                category: '',
                imageUrl: '',
                trailerUrl: '',
                description:'',
                casts: '',
                galaryImages: '',
                type: 'movie'
            },
            movies : [
                {
                    imagePath: 'moviePoster/1.jpeg',
                    title: 'title'
                },
                {
                    imagePath: 'moviePoster/2.jpeg',
                    title: 'title'
                },
                {
                    imagePath: 'moviePoster/3.jpeg',
                    title: 'title'
                },
                {
                    imagePath: 'moviePoster/4.jpeg',
                    title: 'title'
                }
            ]
        }

        this.errorDispElem = React.createRef()

    }
    

    componentDidMount(){
        let { dispatch } = this.props;
        GET_Movies(dispatch,null,(error,snapshot)=>{
            if(error){
                console.log('error getting new movie  data')
            }else {
                console.log('movie category snapshots',snapshot)
                let newMoviesData = []
                snapshot.forEach((doc)=>{
                    console.log(doc.id,doc.data())
                    let dt = {...doc.data()};
                    dt.id = doc.id;
                    dt.imagePath = dt.imageUrl;
                    newMoviesData.push(dt)
                })

                this.setState({
                    ...this.state,
                    movies: [...newMoviesData]
                })
            }
        })
    }

    handleInputChange = (e)=>{
        let target = e.currentTarget;
        this.setState({
            ...this.state,
            movieFormData: {
                ...this.state.movieFormData,
                [target.name]: target.value
            }
        })
    }
    checkIfEmpty = ($arr)=>{
        let empty = false;
        $arr.forEach((fld)=>{
            if(fld===''){
                console.log('is empty',String(fld))
                empty=true;
                return
            }
        })
        return empty;
    }
    checkIfValidUrl = ($arr)=>{
        console.log('checking if valid url',$arr)
        let isValid = true;
        $arr.forEach((fld)=>{
            if(fld.startsWith('http')===false){
                isValid=false;
                return
            }
        })
        return isValid;
    } 
    handleAddClick = (e)=>{
        let { dispatch } = this.props;
        let { title,category, imageUrl, trailerUrl, description, casts, galaryImages   } = this.state.movieFormData;
        let flds_tocheck_for_empty = [title,category,imageUrl,trailerUrl,description, galaryImages]
        if(this.checkIfEmpty(flds_tocheck_for_empty)===true){
            // empty found
            this.errorDispElem.current.innerText = 'error: field cannot be empty'
        }else if (this.checkIfValidUrl([imageUrl])===false){
            // not valid url
            this.errorDispElem.current.innerText = 'error: provide a valid url where needed'

        }else {

            // Check if the same movie already entered before
            // looop over the current movies dataset check if titles match
            let title_to_check = title
            let { movies } = this.state;
            
            movies.forEach((movie__)=>{
                let movie_title_sm = movie__.title.toLowerCase()
                if(movie_title_sm.includes(title_to_check.toLowerCase())){
                    alert('Title same as ',JSON.stringify(movie_title_sm))
                    return
                }else{
                    // all clear

                    this.errorDispElem.current.innerText = ''

                    console.log('clicked add',this.state.movieFormData)
                
                
                    ADD_Movie(dispatch,this.state.movieFormData,(error,result)=>{
                        if(error){
                            console.log('error saving movie',error)
                            this.errorDispElem.current.innerText = 'Error saving movie'

                        }else {
                            console.log('successfully saved movie',result)
                            this.errorDispElem.current.innerText = 'Saved Movie Successfully'
                            setTimeout(()=>{
                                this.errorDispElem.current.innerText = ''

                            },1000)

                        }
                    })
                }
            })

            

        }
        
    }

    handleMovieDelete = ($id)=>{
        console.log('delete',$id)
        let { dispatch } = this.props;
        DELETE_Movie(dispatch,$id,(error,result)=>{
            if(error){
                console.log('error deleting movie category,id',error)
            }else {
                console.log('deleted',result)
            }
        })

    }
    render(){
         let { movies } = this.state;
        let { title,category, imageUrl, trailerUrl, description, casts , galaryImages, type  } = this.state;
        let { MoviesCategoriesArr } = this.props;

        return (
            <Manager TITLE="Manage Movies ">
                <div className="ManageHomeSliderForm">
                    <p className="localInputErrorDisp" ref={this.errorDispElem}></p>

                    <input type="text" placeholder="Type Movie Title" name="title" value={title} onChange={this.handleInputChange}/>
                    <br/>
                    <br/>
                    {/* <input type="text" placeholder="Type Category" name="category" value={category} onChange={this.handleInputChange}/> */}
                    <span>Category:</span>
                    <select value={category} name="category" onChange={this.handleInputChange}>
                        {MoviesCategoriesArr.map((category)=>{
                            return(
                                <option value={category.title}>{category.title}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <br/>
                    {/* <span>Type:</span>
                    <select value={type} name="type" onChange={this.handleInputChange}>
                        <option value='movie'>Movie</option>
                        <option value='series'>Series</option>                         
                    </select>
                    <br/>
                    <br/> */}
                    <input type="text" placeholder="Type Image url" name="imageUrl" value={imageUrl} onChange={this.handleInputChange}/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Type in galaryImages" name="galaryImages" value={galaryImages} onChange={this.handleInputChange}/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Type Trailer url" name="trailerUrl" value={trailerUrl} onChange={this.handleInputChange}/>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Type movie casts" name="casts" value={casts} onChange={this.handleInputChange}/>
                    <br/>
                    <br/>
                    <textarea type="text" placeholder="Type  Movie description" name="description" value={description} onChange={this.handleInputChange}></textarea>
                    <br/>
                    <br/>
                    <button onClick={(e)=>this.handleAddClick(e)}>Add</button>
                </div>
                <Table DATA={movies} DELETE_FUNCTION={this.handleMovieDelete}/>

                
            </Manager>    
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    let { moviesReducer,movies_and_SeriesCategoriesReducer } = state;
    return {
        movies: moviesReducer.movies,
        MoviesCategoriesArr:  movies_and_SeriesCategoriesReducer.MoviesCategoriesArr,
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageMovies);