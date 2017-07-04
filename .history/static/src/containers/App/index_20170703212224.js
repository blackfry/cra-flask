import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* application components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles/app.scss'; // eslint-disable-line no-unused-vars

class Main extends Component {
  render() {(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section>
      <Header/>
      <div
        className="container"
        style={{
        marginTop: 10,
        paddingBottom: 250
      }}>
        {props.children}
      </div>
      <div>
        <Footer/>
      </div>
    </section>
  </MuiThemeProvider>
);

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
