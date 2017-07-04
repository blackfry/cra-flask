export const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (token) {
    console.log('checkauth called', token)
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
    return false
  }
}
