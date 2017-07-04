import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/data';

class ProtectedView extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const token = this.props.token;
    this
      .props
      .fetchProtectedData(token);
  }

  render() {
    return (
      <div>
        {!this.props.loaded
          ? <h1>Loading data...</h1>
          : <div>
            <h1>Welcome back, {this.props.userName}!</h1>
            <h1>{this.props.data.data.email}</h1>
          </div>
}
      </div>
    );
  }
}

ProtectedView.propTypes = {
  fetchProtectedData: PropTypes.func,
  loaded: PropTypes.bool,
  userName: PropTypes.string,
  data: PropTypes.any,
  token: PropTypes.string
};

function mapStateToProps(state) {
  return {data: state.data, token: state.auth.token, loaded: state.data.loaded, isFetching: state.data.isFetching};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedView);