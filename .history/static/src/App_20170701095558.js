import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import './App.css';
import Routes from './routes';
import App from './containers/Ap'

class App extends Component {
  render() {
    // const {match, history, location} = this.props;
    return (
      <div>
        <Routes/>
      </div>  
    );
  }
}

export default App;
