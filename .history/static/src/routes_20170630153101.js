import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import './App.css';

import {ProductsListWithData} from './components/ProductsListWithData';
import {ProductList} from './components/ProductList';
import {NotFound} from './components/NotFound';
import { ProductDetails } from './components/ProductDetails';
import ShopContainer from './components/shop/components/ShopContainer'

const Routes = () => (
  <Switch className="animated slideInLeft">
  <Route exact path="/" component={ProductsListWithData} className="animated slideInLeft"/>
    <Route exact path="/products" component={ProductList}/>
    <Route exact path="/suppliers" component={ProductList}/>
    <Route exact path="/products/:productId" component={ProductDetails} />
    <Route exact path="/shopify" component={ShopContainer}/>
    <Route component={NotFound}/>
  </Switch>
);