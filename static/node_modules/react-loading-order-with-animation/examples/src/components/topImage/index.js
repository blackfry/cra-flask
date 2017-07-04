import React, { Component } from 'react';

// Lib
import LoadingOrderAnimation from '../../../../lib/src/';

// Component styles
import styles from './styles';

export default class TopImage extends Component {
  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <LoadingOrderAnimation animation="fade-in"
                                     move="from-bottom-to-top"
                                     distance={30}
                                     speed={1000}
                                     wait={300}>
                <h1 className="title">
                  React Loading Order With Animation
                </h1>
              </LoadingOrderAnimation>
            </div>
          </div>

          <div className="row features">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <LoadingOrderAnimation animation="fade-in"
                                     move="from-left-to-right"
                                     distance={100}
                                     speed={700}
                                     wait={100}>
                <span className="easy" />
                <h3>
                  Easy
                </h3>
              </LoadingOrderAnimation>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <LoadingOrderAnimation animation="fade-in"
                                     move="from-top-to-bottom"
                                     distance={10}
                                     speed={700}
                                     wait={300}>
                <span className="smart" />
                <h3>
                  Smart
                </h3>
              </LoadingOrderAnimation>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <LoadingOrderAnimation animation="fade-in"
                                     move="from-right-to-left"
                                     distance={100}
                                     speed={700}
                                     wait={500}>
                <span className="fun" />
                <h3>
                  Fun
                </h3>
              </LoadingOrderAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

