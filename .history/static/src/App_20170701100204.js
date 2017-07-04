import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './App.css';
import Routes from './routes';
import { App as aa } from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';

require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

injectTapEventPlugin();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    // const {match, history, location} = this.props;
    return (
      <Provider store={store}>
        <aa/>  
        <Routes/>
      </Provider>  
    );
  }
}

export default App;
