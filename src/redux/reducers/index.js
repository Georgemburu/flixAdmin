import { combineReducers } from 'redux';

import authReducer from './authReducer'
import homeSliderReducer from './homeSliderReducer'
import movieCategoriesReducer from './movieCategoriesReducer'
import moviesReducer from './moviesReducer'

const rootReducer = combineReducers({
    authReducer,
    homeSliderReducer,
    movieCategoriesReducer,
    moviesReducer
})

export default rootReducer;

