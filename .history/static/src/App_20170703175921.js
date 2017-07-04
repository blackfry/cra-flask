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
  // componentWillReceiveProps(newProps) {
  //   if (newProps.isAuthenticated !== this.props.isAuthenticated) {
  //     this.forceUpdate()
  //     console.log({ newProps })
  //     console.log(this.props)
  //   }
  // }

  render() {
    let { isAuthenticated } = this.props;
    console.log({isAuthenticated})
    return (
      <div>
      <Main>
       <NonAuthRoutes />
      </Main>
    )
  }
}

function mapStateToProps(state) {
  console.log({state})
  return {isAuthenticated: state.auth.isAuthenticated};
}

const ConnectedApp = connect(mapStateToProps)(App);


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


/*isAuthenticated
? <AuthRoutes />
: <NonAuthRoutes />
}*/