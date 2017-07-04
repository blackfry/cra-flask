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

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
