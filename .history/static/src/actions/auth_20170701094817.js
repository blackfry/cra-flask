import {withRouter} from 'react-router';

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS
} from '../constants/index';

import {parseJSON} from '../utils/misc';
import {get_token, create_user} from '../utils/http_functions';

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {type: LOGIN_USER_SUCCESS, payload: {
      token
    }};
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}

export function loginUserRequest() {
  return {type: LOGIN_USER_REQUEST};
}

export function logout() {
  localStorage.removeItem('token');
  return {type: LOGOUT_USER};
}

export function logoutAndRedirect() {
  return (dispatch) => {
    dispatch(logout());
    this
      .props
      .history
      .push('/');
  };
}

export function redirectToRoute(route) {
  return () => {
    this
      .props
      .history
      .push(route);
  };
}

export function loginUser(email, password) {
  return function (dispatch) {
    dispatch(loginUserRequest());
    return get_token(email, password)
      .then(parseJSON)
      .then(response => {
        try {
          dispatch(loginUserSuccess(response.token));
          this
            .props
            .history
            .push('/main');
        } catch (e) {
          alert(e);
          dispatch(loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }));
        }
      })
      .catch(error => {
        dispatch(loginUserFailure({
          response: {
            status: 403,
            statusText: 'Invalid username or password'
          }
        }));
      });
  };
}

export function registerUserRequest() {
  return {type: REGISTER_USER_REQUEST};
}

export function registerUserSuccess(token) {
  localStorage.setItem('token', token);
  return {type: REGISTER_USER_SUCCESS, payload: {
      token
    }};
}

export function registerUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: REGISTER_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  };
}

function registerUser(email, password, history) => {
  return function (dispatch) {
    dispatch(registerUserRequest());
    return create_user(email, password)
      .then(parseJSON)
      .then(response => {
        try {
          dispatch(registerUserSuccess(response.token));
          this
            .props
            .history
            .push('/main');
        } catch (e) {
          dispatch(registerUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }));
        }
      })
      .catch(error => {
        dispatch(registerUserFailure({
          response: {
            status: 403,
            statusText: 'User with that email already exists'
          }
        }));
      });
  };
}

export withRouter(registerUser);
