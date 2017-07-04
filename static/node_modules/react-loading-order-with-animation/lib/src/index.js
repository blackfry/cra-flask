import React, { Component } from 'react';

// Utils
import { getMarginTop, getMarginLeft } from 'utils';

// Component styles
import styles from './styles';

export default class LoadingOrderAnimation extends Component {

  static propTypes = {
    children: React.PropTypes.object,
    animation: React.PropTypes.string,
    move: React.PropTypes.string,
    speed: React.PropTypes.number,
    distance: React.PropTypes.number,
    wait: React.PropTypes.number,
    block: React.PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    const { wait = 100 } = this.props;

    setTimeout(() =>
      this.setState({
        loaded: true,
      }), wait
    );
  }

  render() {
    const {
      animation = 'fade-in',
      move = '',
      distance = 0,
      speed = 700,
      block = '',
    } = this.props;

    const { loaded } = this.state;

    const classes = `${styles}
                     ${animation}
                     ${move}
                     ${loaded && 'loaded'}
                     ${block}`;

    const animationStyles = {
      transition: `${speed / 1000}s`,
      top: getMarginTop(move, distance),
      left: getMarginLeft(move, distance),
    };

    return (
      <div className={`${classes}`}
           style={animationStyles}>
        {this.props.children}
      </div>
    );
  }
}
