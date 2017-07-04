import React, {Component} from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* application components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles/app.scss'; // eslint-disable-line no-unused-vars

const Main = props => {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
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

MyComponent.propTypes = {
  children: PropTypes.any,
};
