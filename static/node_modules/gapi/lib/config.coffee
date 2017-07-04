module.exports =
  api:
    key: null
  error: (err) ->
    err.message += ['. Please define \'', err.arguments[0], '\' inside your arguments.'].join('') if err.type is 'non_object_property_load'
    console.error err.message
  requestOptions:
    host: 'www.googleapis.com'
    port: 443
    path: ''
    method: 'GET'