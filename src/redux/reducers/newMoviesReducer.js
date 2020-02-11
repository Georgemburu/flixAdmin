import { ADD_NEW_MOVIE, GET_NEW_MOVIES, DELETE_NEW_MOVIE } from '../../action.types';


const initialState = {
    movies: []
}
function newMoviesReducer(state=initialState,action){
    switch(action.type){
        case ADD_NEW_MOVIE:
            console.log('reached ADD_NEW_MOVIE reducer')
            return state;
            break;
        case GET_NEW_MOVIES:
            console.log('reached GET_NEW_MOVIES reducer')
            return state;
            break;
        case DELETE_NEW_MOVIE:
            console.log('reached DELETE_NEW_MOVIE reducer')
            return state;
            break;
        default:
            return state;
            break;
    }
}

export default newMoviesReducer;