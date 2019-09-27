import  { ADD_MOVIE_CATEGORY, GET_MOVIE_CATEGORIES, DELETE_MOVIE_CATEGORY } from '../../action.types'

let initialState = {
    posters : [
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
function movieCategoriesReducer(state=initialState,action){
    switch(action.type){
        case ADD_MOVIE_CATEGORY:
            console.log('reached add movie category reducer')
            return state;
            break;
        case GET_MOVIE_CATEGORIES:
            console.log('reached getmovie categories reducer')
            return state;
            break;
        case DELETE_MOVIE_CATEGORY:
            console.log('reached DELETE_MOVIE_CATEGORY categories reducer')
            return state;
            break;
        default:
            return state;
            break;

    }
}

export default movieCategoriesReducer;