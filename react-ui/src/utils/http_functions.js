import axios from 'axios';

const tokenConfig = token => ({
  headers: {
    Authorization: token // eslint-disable-line quote-props
  }
});

export function validateToken(token) {
  return axios.post('/api/is_token_valid', {
    token
  });
}

export function getGithubAccess() {
  window.open(
    '/github-login',
    '_blank' // <- This is what makes it open in a new window.
  );
}

export function createUser(email, password) {
  return axios.post('api/create_user', {
    email,
    password
  });
}

export function getToken(email, password) {
  return axios.post('api/getToken', {
    email,
    password
  });
}

export function hasGithubAccess(token) {
  return axios.get('api/hasGithubAccess', tokenConfig(token));
}

export function dataAboutUser(token) {
  return axios.get('api/user', tokenConfig(token));
}
