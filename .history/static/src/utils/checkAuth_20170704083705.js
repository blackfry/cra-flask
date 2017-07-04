export async const checkAuth = () => {
  try {
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
    })
  } else {
    return null
  }
    
}


// async function getAllBooks() {
//   try {
//     // GET a list of book IDs of the current user
//     var bookIDs = await superagent.get('/user/books');
//     // wait for a second (just for the sake of this example)
//     await delay(1000);
//     // GET information about each book
//     return await superagent.get('/books/ids='+JSON.stringify(bookIDs));
//   } catch(error) {
//     // If any of the awaited promises was rejected, this catch block
//     // would catch the rejection reason
//     return null;
//   }
// }

// // Async functions always return a promise
// getAllBooks()
//   .then(function(books) {
//     console.log(books);
//   });