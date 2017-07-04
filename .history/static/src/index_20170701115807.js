import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={history}>
  <Provider store={store}>
      <App />
    </Provider>
    </Router>    
  , document.getElementById('root'));
registerServiceWorker();


import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import './App.css';
import Routes from './routes';
import {App as aa} from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import createBrowserHistory from 'history/createBrowserHistory'

injectTapEventPlugin();
const store = configureStore();
const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <aa/>
          <Routes/>
        </Provider>
      </Router>
    );
  }
}

export default App;
