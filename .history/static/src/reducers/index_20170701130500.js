import { combineReducers } from 'redux';
import { routerReducer, push } from 'react-router-redux'
import auth from './auth';
import data from './data';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

const rootReducer = combineReducers({
    routing: routerReducer,
    /* your reducers */
    auth,
    data,
});

export default rootReducer;
