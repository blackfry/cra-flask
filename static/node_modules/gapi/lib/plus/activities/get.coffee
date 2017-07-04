config = require '../../config'
{stringify} = require 'querystring'

module.exports = ({activityId, fields}) ->
  queryObject =
    key: config.api.key
    alt: 'json'
  queryObject.fields = fields if fields?

  qs = stringify queryObject

  config.requestOptions.path = "/plus/v1/activities/#{activityId}?#{qs}"

  return require '../../execute'