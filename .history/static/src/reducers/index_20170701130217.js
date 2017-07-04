import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import auth from './auth';
import data from './data';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const rootReducer = combineReducers({
    routing: routerReducer,
    /* your reducers */
    auth,
    data,
});

export default rootReducer;
