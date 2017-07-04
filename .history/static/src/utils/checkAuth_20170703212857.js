

export const checkAuth = (history) => {
  const token = localStorage.getItem('token');
  if (token) {
    fetch('api/is_token_valid', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json', // eslint-disable-line quote-props
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token})
    }).then(res => {
      if (res.status === 200) {
        console.log('success, token was found')
        this
          .props
          .loginUserSuccess(token);

          .history
          .push('/main');

      } else {
        this.setState({loaded: true});
      }
    });
  } else {
    this.setState({loaded: true});
  }
}
