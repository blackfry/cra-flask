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

export const AuthRoutes = () => (
    <Switch>routes
      <Route exact path="/main" component={requireAuthentication(ProtectedView)}/>
      <Route exact path="/analytics" component={requireAuthentication(Analytics)}/>
      <Route component={DetermineAuth(NotFound)}/>
    </Switch>
);


export const NonAuthRoutes = () => (
  <Switch>routes
    <Route path="/login" component={requireNoAuthentication(LoginView)}/>
    <Route exact path="/register" component={requireNoAuthentication(RegisterView)}/>
    <Route exact path="/home" component={requireNoAuthentication(HomeContainer)}/>
    <Route component={DetermineAuth(NotFound)}/>
  </Switch>
);


const checkAuth = ({isAuthenticated}) = {
  if(isAuthenticated) {
    return {
    this
      .props
      .history
      .push('/main');

  } else {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('api/is_token_valid', {
        method: 'post',
        credentials: 'include',
        headers: {
          'Accept': 'application/json', // eslint-disable-line quote-props
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
      }).then(res => {
        if (res.status === 200) {
          this
            .props
            .loginUserSuccess(token);
          this
            .props
            .history
            .push('/main');

        } else {
          this.setState({loaded: true});
        }
      });
    } else {
      this.setState({loaded: true});
    }
  }
}