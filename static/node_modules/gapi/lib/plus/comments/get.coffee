config = require '../../config'
{stringify} = require 'querystring'

module.exports = ({commentId, fields}) ->
  queryObject =
    key: config.api.key
    alt: 'json'
  queryObject.fields = fields if fields?

  qs = stringify queryObject

  config.requestOptions.path = "/plus/v1/comments/#{commentId}?#{qs}"

  return require '../../execute'