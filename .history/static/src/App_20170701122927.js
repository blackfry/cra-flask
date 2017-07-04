import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import './App.css';
import Routes from './routes';
import Main from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import createBrowserHistory from 'history/createBrowserHistory'

injectTapEventPlugin();
const store = configureStore();
const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Main
            yo
            {Routes}
          </div>  
          </Router>
        </Provider>
    );
  }
}

export default App;
