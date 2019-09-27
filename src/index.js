import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import  thunk from 'redux-thunk'
import RootReducer from './redux/reducers'
import { BrowserRouter} from 'react-router-dom'
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
function getDev(){
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}
const store = createStore(RootReducer,compose(applyMiddleware(logger,thunk),getDev()))
ReactDOM.render(<BrowserRouter>
    <Provider store={store}><App /></Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
