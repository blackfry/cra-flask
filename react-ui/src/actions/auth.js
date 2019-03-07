import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS
} from '../constants/index';

import { parseJSON } from '../utils/misc';
import { getToken, createUser } from '../utils/http_functions';

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token
    }
  };
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
  return { type: LOGIN_USER_REQUEST };
}

export function logout() {
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
}

export function logoutAndRedirect(history) {
  return dispatch => {
    dispatch(logout());
    history.push('/');
  };
}

export const redirectToRoute = route => {
  return () => {
    this.props.history.push(route);
  };
};

export const loginUser = (email, password, history) => dispatch => {
  dispatch(loginUserRequest());
  return getToken(email, password)
    .then(parseJSON)
    .then(response => {
      try {
        dispatch(loginUserSuccess(response.token));
        history.push('/main');
      } catch (error) {
        dispatch(
          loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token',
              error
            }
          })
        );
      }
    })
    .catch(error => {
      dispatch(
        loginUserFailure({
          response: {
            status: 403,
            statusText: 'Invalid username or password',
            error
          }
        })
      );
    });
};

export function registerUserRequest() {
  return { type: REGISTER_USER_REQUEST };
}

export function registerUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: REGISTER_USER_SUCCESS,
    payload: {
      token
    }
  };
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

export const registerUser = (email, password, history) => dispatch => {
  dispatch(registerUserRequest());
  return createUser(email, password)
    .then(parseJSON)
    .then(response => {
      try {
        dispatch(registerUserSuccess(response.token));
        history.push('/main');
      } catch (e) {
        dispatch(
          registerUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          })
        );
      }
    })
    .catch(error => {
      dispatch(
        registerUserFailure({
          response: {
            status: 403,
            statusText: 'User with that email already exists',
            error
          }
        })
      );
    });
};
