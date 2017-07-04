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
  <App  
  <Switch className="animated slideInLeft">
  <Route exact path="/" component={ProductsListWithData} className="animated slideInLeft"/>
    <Route exact path="/products" component={ProductList}/>
    <Route exact path="/suppliers" component={ProductList}/>
    <Route exact path="/products/:productId" component={ProductDetails} />
    <Route exact path="/shopify" component={ShopContainer}/>
    <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>  
);