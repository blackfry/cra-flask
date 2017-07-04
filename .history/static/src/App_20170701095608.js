import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import './App.css';
import Routes from './routes';
import App from './containers/App';

class App extends Component {
  render() {
    // const {match, history, location} = this.props;
    return (
      <div>
        <Ap  
        <Routes/>
      </div>  
    );
  }
}

export default App;
