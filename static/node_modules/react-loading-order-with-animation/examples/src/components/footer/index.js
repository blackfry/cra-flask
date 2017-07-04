import React, { Component } from 'react';

// Lib
import LoadingOrderAnimation from '../../../../lib/src/';

// Component styles
import styles from './styles';

export default class Footer extends Component {
  render() {

    return (
      <footer className={`${styles}`}>
        <LoadingOrderAnimation animation="fade-in"
                               move="from-bottom-to-top"
                               distance={30}
                               speed={1000}
                               wait={300}>
          <a href="https://github.com/keske/react-loading-order-with-animation">GitHub</a>
        </LoadingOrderAnimation>
      </footer>
    );
  }
}

