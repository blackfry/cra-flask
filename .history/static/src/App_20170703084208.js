import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import { AuthRoutes, NonAuthRoutes } from './routes';
import Main from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {store} from './store/configureStore';
import createHistory from 'history/createBrowserHistory'

injectTapEventPlugin();
const history = createHistory()

class App extends Component {

  componentDidUpdate(newProps) {
    console.log({ newProps })
    console.log(this.props)
  }

  render() {
    let isAuthenticated = store.getState().auth.isAuthenticated;
    console.log({isAuthenticated})
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Main>
              <AuthRoutes auth={isAuthenticated}/>
              <NonAuthRoutes auth={isAuthenticated}/>
            </Main>
          </div>  
          </Router>
        </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {isAuthenticating: state.auth.isAuthenticated, statusText: state.auth.statusText};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);