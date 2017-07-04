import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger'

const debugware = [];
if (process.env.NODE_ENV !== 'production') {

    debugware.push(createLogger({
        collapsed: true,
    }));
}

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    return store;
}

