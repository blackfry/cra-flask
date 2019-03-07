import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/auth';

class NotFound extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-md-8">
        <h1>Not Found</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound);
