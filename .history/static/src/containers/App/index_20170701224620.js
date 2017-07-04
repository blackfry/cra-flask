import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* application components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';

/* global styles for app */
import './styles/app.scss'; // eslint-disable

export default class Main extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.any
  };

  render() {
    console.log('render Main')
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <section>
          <Header/>
          <div
            className="container"
            style={{
            marginTop: 10,
            paddingBottom: 250
            }}>
            {this.props.children}
          </div>
          <div>
            <Footer/>
          </div>
        </section>
      </MuiThemeProvider>
    );
  }
}

