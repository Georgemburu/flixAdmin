import React from 'react'

import './manageMovieCategories.css'

import Manager from '../../components/containers/manager'
import Table from '../../components/containers/table'

import { connect } from 'react-redux'
import { ADD_Movie_Category , GET_Movie_Categories, DELETE_Movie_Category} from '../../redux/actions/movieCategoriesActions'

class ManageMovieCategories extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posterFormData: {
                category: '',
                imageUrl: ''
            },
            movieCategories : [
                // {
                //     imagePath: 'moviePoster/1.jpeg',
                //     title: 'title'
                // },
                // {
                //     imagePath: 'moviePoster/2.jpeg',
                //     title: 'title'
                // },
                // {
                //     imagePath: 'moviePoster/3.jpeg',
                //     title: 'title'
                // },
                // {
                //     imagePath: 'moviePoster/4.jpeg',
                //     title: 'title'
                // }
            ]
        }

        // end of state
        this.errorDispElem = React.createRef()

    }
    
   componentDidMount(){
       let { dispatch } = this.props;
        GET_Movie_Categories(dispatch,null,(error,snapshot)=>{
            if(error){
                console.log('error getting new movie category data')
            }else {
                console.log('movie category snapshots',snapshot)
                let newMovieCategoriesData = []
                snapshot.forEach((doc)=>{
                    console.log(doc.id,doc.data())
                    let dt = {...doc.data()};
                    dt.id = doc.id;
                    dt.imagePath = dt.imageUrl;
                    newMovieCategoriesData.push(dt)
                })

                this.setState({
                    ...this.state,
                    movieCategories: [...newMovieCategoriesData]
                })
            }
        })
   }
    handleInputChange = (e)=>{
        let target = e.currentTarget;
        console.log(target.name,target.value)
        this.setState({
            ...this.state,
            posterFormData:{
                ...this.state.posterFormData,
                [target.name]:target.value
            }
        })
    }

    handleAddClick = (e)=>{
        let { category, imageUrl } = this.state.posterFormData;
        let { dispatch } = this.props;
        console.log('clicked add')
        console.log(this.state)
        // check if any empty
        if(category===''|| imageUrl===''){
            this.errorDispElem.current.innerText = 'Field cannot be empty'
        }else if(this.state.posterFormData.imageUrl.startsWith('http')===false){
            this.errorDispElem.current.innerText = 'Error. Image url must be a valid url'
        }else {
            this.errorDispElem.current.innerText = ''
            // console.log(this.state.posterFormData)
            // SAVE
            ADD_Movie_Category(dispatch,this.state.posterFormData,(error,result)=>{
                if(error){
                    console.log('error',error)
                }else {
                    console.log('result',result)
                    this.errorDispElem.current.innerText = 'Added successfull'
                    setTimeout(()=>{
                        this.errorDispElem.current.innerText = ''
                    },1000)
                }
            })
        }
    }
    handleMovieCategoryDelete = ($id)=>{
        console.log($id)
        let { dispatch } = this.props;
        DELETE_Movie_Category(dispatch,$id,(error,result)=>{
            if(error){
                console.log('error deleting movie category,id',error)
            }else {
                console.log('deleted',result)
            }
        })
    }
    render(){
        let { movieCategories } = this.state;
        let { category, imageUrl } = this.state.posterFormData
        return (
            <Manager TITLE="Manage Movie Categories">
                <div className="ManageHomeSliderForm">
                    <p className="localInputErrorDisp" ref={this.errorDispElem}></p>
                    <input type="text" name="category" placeholder="Type Category" value={category} onChange={this.handleInputChange}/>
                    <br/>
                    <br/>

                    <input type="text" name="imageUrl" placeholder="Type Image url" value={imageUrl} onChange={this.handleInputChange}/>
                    <br/>
                    <br/>
                    {/* <input type="file" placeholder="Type Image url"/> */}
                    <br/>
                    <br/>
                    <button onClick={(e)=>this.handleAddClick(e)}>Add</button>
                </div>
                <Table DATA={movieCategories} DELETE_FUNCTION={this.handleMovieCategoryDelete}/>

                
            </Manager>    
        )
}
}

function mapStateToProps(state){
    console.log('stateTOMAP->?',state)
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch: dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageMovieCategories);