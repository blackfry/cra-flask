import React from 'react';



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
  <BrowserRouter>
    <Switch className="animated slideInLeft">
      <Route path="main" component={requireAuthentication(ProtectedView)}/>
      <Route path="login" component={requireNoAuthentication(LoginView)}/>
      <Route path="register" component={requireNoAuthentication(RegisterView)}/>
      <Route path="home" component={requireNoAuthentication(HomeContainer)}/>
      <Route path="analytics" component={requireAuthentication(Analytics)}/>
      <Route component={DetermineAuth(NotFound)}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
