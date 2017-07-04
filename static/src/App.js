import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';

import './App.css';
import {AuthRoutes, NonAuthRoutes} from './routes';
import Main from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {store} from './store/configureStore';
import createHistory from 'history/createBrowserHistory'

injectTapEventPlugin();
const history = createHistory()

const App = ({isAuthenticated}) => {
  return (
    <Main>
      {isAuthenticated
        ? <AuthRoutes/>
        : <NonAuthRoutes/>
}
    </Main>
  )
}

function mapStateToProps(state) {
  return {isAuthenticated: state.auth.isAuthenticated};
}

const ConnectedApp = withRouter(connect(mapStateToProps)(App));

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ConnectedApp/>
        </Router>
      </Provider>
    );
  }
}

export default AppContainer;
