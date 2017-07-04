config = require './config'
https = require 'https'

module.exports =
  execute: (callback) ->
    output = ''

    req = https.request config.requestOptions, (res) ->
      res.on 'data', (data) ->
        output += data
      res.on 'end', ->
        callback JSON.parse output
      res.on 'close', ->
        res.emit 'end'

    req.end()
    req.on 'error', (err) ->
      callback err

    return req