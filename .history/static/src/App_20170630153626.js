import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>  
    );
  }
}

export default App;
