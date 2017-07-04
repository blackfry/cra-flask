import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';

import './App.css';
import { AuthRoutes, NonAuthRoutes } from './routes';
import Main from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {store} from './store/configureStore';
import createHistory from 'history/createBrowserHistory'

injectTapEventPlugin();
const history = createHistory()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Main/>
            {store.a<Routes auth={store.auth}/>
            
          </div>  
          </Router>
        </Provider>
    );
  }
}

export default App;
