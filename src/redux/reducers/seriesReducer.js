import { ADD_SERIES, GET_SERIES, DELETE_SERIES } from '../../action.types'

const initialState = {
    series: []
}
function moviesReducer(state=initialState,action){
    switch(action.type){
        case ADD_SERIES:
            console.log('reached ADD_SERIES reducer')
            return state;
            break;
        case GET_SERIES:
            console.log('reached GET_SERIES reducer')
            return state;
            break;
        case DELETE_SERIES:
            console.log('reached DELETE_SERIES reducer')
            return state;
            break;
        default:
            return state;
            break;
    }
}

export default moviesReducer;