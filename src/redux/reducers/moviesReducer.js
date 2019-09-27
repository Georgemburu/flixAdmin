import { ADD_MOVIE, GET_MOVIES, DELETE_MOVIE } from '../../action.types'

const initialState = {
    movies: []
}
function moviesReducer(state=initialState,action){
    switch(action.type){
        case ADD_MOVIE:
            console.log('reached ADD_MOVIE reducer')
            return state;
            break;
        case GET_MOVIES:
            console.log('reached GET_MOVIES reducer')
            return state;
            break;
        case DELETE_MOVIE:
            console.log('reached DELETE_MOVIE reducer')
            return state;
            break;
        default:
            return state;
            break;
    }
}

export default moviesReducer;