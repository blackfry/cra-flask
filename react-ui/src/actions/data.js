import { FETCH_PROTECTED_DATA_REQUEST, RECEIVE_PROTECTED_DATA } from '../constants/index';
import { parseJSON } from '../utils/misc';
import { dataAboutUser } from '../utils/http_functions';
import { logoutAndRedirect } from './auth';

export function receiveProtectedData(data) {
  return {
    type: RECEIVE_PROTECTED_DATA,
    payload: {
      data
    }
  };
}

export function fetchProtectedDataRequest() {
  return {
    type: FETCH_PROTECTED_DATA_REQUEST
  };
}

export const fetchProtectedData = token => dispatch => {
  dispatch(fetchProtectedDataRequest());
  dataAboutUser(token)
    .then(parseJSON)
    .then(response => {
      dispatch(receiveProtectedData(response.result));
    })
    .catch(error => {
      if (error.status === 401) {
        dispatch(logoutAndRedirect(error));
      }
    });
};
