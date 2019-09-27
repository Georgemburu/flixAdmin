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
        let {movieCategories} = this.state;

        return(
            <Fragment>
                 {movieCategories.map((category,index)=>{
                    return (
                        <img src={category.imagePath} alt="category" key={category.id} data_key={category.id} className="movieCategoryImage canClick hoverFade"/>                        
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
                <div className="postersCountDiv">
                        {this.displayPostersCount()}
                </div>
                <div className="homeControlsDiv">
                    <Link to="ManageHomeSlider" className="hoverFade">Manage Home Image Slider</Link>
                    <Link to="ManageMovieCategories" className="hoverFade">Manage Movie Categories</Link>
                </div>
                <div className="home_categoriesDiv">
                    <div className="home_categoriesHeader">Categories</div>
                    <div className="home_categoriesList">
                        {this.displayMovieCategories()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log('1>HERE',state)
    let { homeSliderReducer } = state;
    let posters = homeSliderReducer.posters!==undefined?homeSliderReducer.posters: homeSliderReducer.homeSliderImages;
    return {
        posters: posters
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);