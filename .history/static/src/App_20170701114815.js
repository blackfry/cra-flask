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

injectTapEventPlugin();
const store = configureStore();
const history = createBrowserHistory()

class App extends Component {
  render() {
    // const {match, history, location} = this.props;
    return (
      <Router history={>
        <Provider store={store}>
          <aa/>
          <Routes/>
        </Provider>
      </Router>
    );
  }
}

export default App;
