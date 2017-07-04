import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import { App } from './containers/App';
import { HomeContainer } from './containers/HomeContainer';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProtectedView from './components/ProtectedView';
import Analytics from './components/Analytics';
import NotFound from './components/NotFound';

import { DetermineAuth } from './components/DetermineAuth';
import { requireAuthentication } from './components/AuthenticatedComponent';
import { requireNoAuthentication } from './components/notAuthenticatedComponent';

export default (
  <BrowserRouter>
  <App/>  
    <Switch className="animated slideInLeft">
      <Route path="main" component={requireAuthentication(ProtectedView)} />
      <Route path="login" component={requireNoAuthentication(LoginView)} />
      <Route path="register" component={requireNoAuthentication(RegisterView)} />
      <Route path="home" component={requireNoAuthentication(HomeContainer)} />
      <Route path="analytics" component={requireAuthentication(Analytics)} />
      <Route component={DetermineAuth(NotFound}/>
    </Switch>
  </BrowserRouter>  
);