import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import {HomeContainer} from './containers/HomeContainer';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProtectedView from './components/ProtectedView';
import Analytics from './components/Analytics';
import NotFound from './components/NotFound';

import {DetermineAuth} from './components/DetermineAuth';
import {requireAuthentication} from './components/AuthenticatedComponent';
import {requireNoAuthentication} from './components/notAuthenticatedComponent';

const Routes = () => (
    <Switch>
      <Route exact path="/main" component={requireAuthentication(ProtectedView)}/>
      <Route exact path="login" component={requireNoAuthentication(LoginView)}/>
      <Route exact path="register" component={requireNoAuthentication(RegisterView)}/>
      <Route path="home" component={requireNoAuthentication(HomeContainer)}/>
      <Route path="analytics" component={requireAuthentication(Analytics)}/>
      <Route component={DetermineAuth(NotFound)}/>
    </Switch>
);

export default Routes;
