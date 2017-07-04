export const checkAuth = async () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      return await fetch('api/is_token_valid', {
        method: 'post',
        credentials: 'include',
        headers: {
          'Accept': 'application/json', // eslint-disable-line quote-props
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
      })
    }
  } catch (error) {
    return null;
  }
}
