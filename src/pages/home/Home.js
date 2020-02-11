import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

import  { connect } from 'react-redux'

import { GET_HomeSliderImages } from '../../redux/actions/homeSliderActions'
import { GET_Movie_Categories } from '../../redux/actions/movieCategoriesActions'

class Home extends React.Component {
    state = {
        posters : [
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
        ],
        movieCategories:[]
    }

    
    componentDidMount(){
        let { dispatch } = this.props
        GET_HomeSliderImages(dispatch,null,(error,result)=>{
            if(error){
                console.log('error from home.js',error)
            }else {
                console.log('result from home.js',result)
                let newData = []
                result.forEach((data)=>{
                    let dt = data.data()
                    dt.imagePath = dt.imageUrl;
                    dt.id = data.id;
                    newData.push(dt)
                })
                console.log('NEW DATA',newData)
                this.setState({
                    ...this.state,
                    posters:[...newData]
                })
            }
        })
        // end of home slider
   
            // GET_Movie_Categories(dispatch,null,(error,snapshot)=>{
            //     if(error){
            //         console.log('error getting new movie category data')
            //     }else {
            //         console.log('movie category snapshots',snapshot)
            //         let newMovieCategoriesData = []
            //         snapshot.forEach((doc)=>{
            //             console.log(doc.id,doc.data())
            //             let dt = {...doc.data()};
            //             dt.id = doc.id;
            //             dt.imagePath = dt.imageUrl;
            //             newMovieCategoriesData.push(dt)
            //         })
    
            //         this.setState({
            //             ...this.state,
            //             movieCategories: [...newMovieCategoriesData]
            //         })
            //     }
            // })
        
    }

    diaplayPosters =()=>{
        // console.log('HERE->',this.props)
        let posters = this.state.posters;
        // let {posters} = this.props
        console.log('displaying posters fn',posters)
        return (
            <Fragment>
            {posters.map((poster,index)=>{
                return(
                    <li key={poster.id} data_key={poster.id}>
                        <img src={poster.imagePath} alt="poster"  data_key={poster.id}/>
                    </li>
                )
            })}
            </Fragment>
        )
    }
    displayPostersCount =()=>{
        let posters = this.state.posters;
        // let {posters} = this.props 


        return (
            <Fragment>
                {posters.map((poster,index)=>{
                    return (
                        <span className="roundedSpan" key={index+'span'} ></span>
                    )
                })
                }
            </Fragment>
        )
    }
    displayMovieCategories =()=>{
        // let {movieCategories} = this.state;
        console.log('HOME PAGE props',this.props)
        let { MoviesCategoriesArr } = this.props;

        return(
            <Fragment>
                 {MoviesCategoriesArr.map((category,index)=>{
                    return (
                        // <img src={category.imagePath} alt="category" key={category.id} data_key={category.id} className="movieCategoryImage canClick hoverFade"/>
                        <div style={{
                            height: '10rem',
                            borderRadius: 4,
                            width: '10rem',
                            border: '1px solid gray',
                            display: 'grid',
                            gridTemplateColumns:'1fr',
                            backgroundColor: index%2===0?'rgba(160,32,76,.5)':'#23103A'
                        }}>
                            <div className='flexAlignCenter'>
                                <img src={category.icon}/>
                            </div>
                            <div className='flexAlignCenter'>
                                <p>{category.title}</p>
                            </div>
                        </div>                         
                    )
                })
                }
            </Fragment>
        )
    }
    displaySeriesCategories = ()=>{
        console.log('HOME PAGE props',this.props)
        let { seriesCategoriesArr } = this.props;

        return(
            <Fragment>
                 {seriesCategoriesArr.map((category,index)=>{
                    return (
                        // <img src={category.imagePath} alt="category" key={category.id} data_key={category.id} className="movieCategoryImage canClick hoverFade"/>
                        <div style={{
                            height: '10rem',
                            width: '10rem',
                            borderRadius: 4,
                            border: '1px solid gray',
                            display: 'grid',
                            gridTemplateColumns:'1fr',
                            backgroundColor: 'rgba(89, 112, 108,.5)'
                        }}>
                            <div className='flexAlignCenter'>
                                <img src={category.icon}/>
                            </div>
                            <div className='flexAlignCenter'>
                                <p>{category.title}</p>
                            </div>
                        </div>                        
                    )
                })
                }
            </Fragment>
        )
    }
    render(){
        return (
            <Fragment>
                <div className="home_ImageSlider">
                    <ul>
                         {this.diaplayPosters()}
                    </ul>
                  
                </div>
                {/* <div className="postersCountDiv">
                        {this.displayPostersCount()}
                </div>
                <div className="homeControlsDiv">
                    <Link to="ManageHomeSlider" className="hoverFade">Manage Home Image Slider</Link>
                    <Link to="ManageMovieCategories" className="hoverFade">Manage Movie Categories</Link>
                </div> */}
                <div className="newMoviesDiv">
                    <div className="home_categoriesHeader">New Movies</div>
                    <div className="newMoviesDisplayDiv">
                        <ul>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                            <li>
                                <img src="https://www.cinemasguzzo.com/DATA/FILM/5239~v~maleficent-mistress-of-evil.jpg"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home_categoriesDiv">
                    <div className="home_categoriesHeader">Movies Categories</div>
                    <div className="home_categoriesList">
                        {this.displayMovieCategories()}
                    </div>
                </div>


                <div className="home_categoriesDiv">
                    <div className="home_categoriesHeader">Series Categories</div>
                    <div className="home_categoriesList">
                        {this.displaySeriesCategories()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log('1>HERE',state)
    let { homeSliderReducer, movies_and_SeriesCategoriesReducer } = state;
    let posters = homeSliderReducer.posters!==undefined?homeSliderReducer.posters: homeSliderReducer.homeSliderImages;
    return {
        posters: posters,
        seriesCategoriesArr: movies_and_SeriesCategoriesReducer.SeriesCategoriesArr,
        MoviesCategoriesArr:  movies_and_SeriesCategoriesReducer.MoviesCategoriesArr,
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);