import { combineReducers } from 'redux';

import authReducer from './authReducer'
import homeSliderReducer from './homeSliderReducer'
import movies_and_SeriesCategoriesReducer from './movies_and_SeriesCategoriesReducer'
import moviesReducer from './moviesReducer'
import seriesReducer from './seriesReducer';
import chatsReducer from './chatsReducer';
import newMoviesReducer from './newMoviesReducer';


const rootReducer = combineReducers({
    authReducer,
    homeSliderReducer,
    movies_and_SeriesCategoriesReducer,
    moviesReducer,
    seriesReducer,
    chatsReducer,
    newMoviesReducer
})

export default rootReducer;

