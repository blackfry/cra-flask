import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';

class Analytics extends Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="col-md-8">
                <h1>Analytics</h1>
                <hr />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isRegistering: state.auth.isRegistering,
        registerStatusText: state.auth.registerStatusText,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
