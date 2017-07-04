import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger'
import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this
// case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

const debugware = [];
if (process.env.NODE_ENV !== 'production') {
  debugware.push(createLogger({collapsed: true}));
}

const createStoreWithMiddleware = compose(applyMiddleware(thunk, ...debugware, historyMiddleware), window.devToolsExtension
  ? window.devToolsExtension()
  : f => f)(createStore);

export const store = createStoreWithMiddleware(rootReducer)
