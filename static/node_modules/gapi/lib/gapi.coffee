config = require './config'

module.exports =
  server:
    setApiKey: (apiKey) ->
      config.api.key = apiKey
    load: (apiName, apiVersion, callback) ->
      @[apiName] = require "./#{apiName}/#{apiVersion}"
      callback()