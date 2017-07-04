import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger'

const debugware = [];
if (process.env.NODE_ENV !== 'production') {

    debugware.push(createLogger({
        collapsed: true,
    }));
}

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, ...debugware)
    );

    return store;
}


import {createStore, applyMiddleware} from 'redux';  
import rootReducer from '../reducers/rootReducer';  
import thunk from 'redux-thunk';

export default function configureStore() {  
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}