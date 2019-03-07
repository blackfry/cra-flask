import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router, withRouter } from 'react-router-dom';

import './App.css';
import createHistory from 'history/createBrowserHistory';
import { AuthRoutes, NonAuthRoutes } from './routes';
import Main from './containers/App';

import store from './store/configureStore';

const history = createHistory();

const App = ({ isAuthenticated }) => {
  return <Main>{isAuthenticated ? <AuthRoutes /> : <NonAuthRoutes />}</Main>;
};

function mapStateToProps(state) {
  return { isAuthenticated: state.auth.isAuthenticated };
}

const ConnectedApp = withRouter(connect(mapStateToProps)(App));

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ConnectedApp />
        </Router>
      </Provider>
    );
  }
}

export default AppContainer;
