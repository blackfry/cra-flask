import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-webpack';

// Components
import TopImage from 'components/topImage';
import Footer from 'components/footer';

// Component styles
import styles from './styles';

export default class Index extends Component {
  render() {
    return (
      <div className={`${styles}`}>
        <TopImage />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
