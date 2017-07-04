config = require '../../config'
{stringify} = require 'querystring'

module.exports = ({query, language, maxResults, orderBy, pageToken, fields}) ->
  queryObject =
    key: config.api.key
    alt: 'json'
    query: query
  queryObject.language = language if language?
  queryObject.maxResults = maxResults if maxResults?
  queryObject.orderBy = orderBy if orderBy?
  queryObject.pageToken = pageToken if pageToken?
  queryObject.fields = fields if fields?

  qs = stringify queryObject

  config.requestOptions.path = "/plus/v1/activities?#{qs}"

  return require '../../execute'