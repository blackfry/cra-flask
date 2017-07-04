

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
       return res.status === 200
    
    });
  } else {
    this.setState({loaded: true});
  }
}
