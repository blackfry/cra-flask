import { createStore, applyMiddleware, compose } from 'redux';
import invariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

const resolveMiddleware = () => {
  const history = createHistory();
  const historyMiddleware = routerMiddleware(history);

  const middleware = [thunk, historyMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    return composeEnhancer(applyMiddleware(...middleware, invariant({ ignore: ['queries'] })));
  }
  return compose(applyMiddleware(...middleware));
};

const middleware = resolveMiddleware();
const store = createStore(rootReducer, middleware);

export default store;
