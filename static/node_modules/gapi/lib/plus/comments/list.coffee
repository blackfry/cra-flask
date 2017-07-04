config = require '../../config'
{stringify} = require 'querystring'

module.exports = ({activityId, maxResults, pageToken, sortOrder, fields}) ->
  queryObject =
    key: config.api.key
    alt: 'json'
  queryObject.maxResults = maxResults if maxResults?
  queryObject.pageToken = pageToken if pageToken?
  queryObject.sortOrder = sortOrder if sortOrder?
  queryObject.fields = fields if fields?

  qs = stringify queryObject

  config.requestOptions.path = "/plus/v1/activities/#{activityId}/comments?#{qs}"

  return require '../../execute'