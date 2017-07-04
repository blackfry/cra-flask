import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';

import './App.css';
import Routes from './routes';
import { App as aa } from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';

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
