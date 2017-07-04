config = require '../../config'
{stringify} = require 'querystring'

module.exports = ({activityId, collection, maxResults, pageToken, fields}) ->
  queryObject =
    key: config.api.key
    alt: 'json'
  queryObject.maxResults = maxResults if maxResults?
  queryObject.pageToken = pageToken if pageToken?
  queryObject.fields = fields if fields?

  qs = stringify queryObject

  config.requestOptions.path = "/plus/v1/activities/#{activityId}/people/#{collection}?#{qs}"

  return require '../../execute'