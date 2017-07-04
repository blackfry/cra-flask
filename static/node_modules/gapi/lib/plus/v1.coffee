config = require '../config'

module.exports =
  activities:
    get: (options) ->
      try
        require('./activities/get') options
      catch error
        config.error error
    list: (options) ->
      try
        require('./activities/list') options
      catch error
        config.error error
    search: (options) ->
      try
        require('./activities/search') options
      catch error
        config.error error
  comments:
    get: (options) ->
      try
        require('./comments/get') options
      catch error
        config.error error
    list: (options) ->
      try
        require('./comments/list') options
      catch error
        config.error error
  people:
    get: (options) ->
      try
        require('./people/get') options
      catch error
        config.error error
    listByActivity: (options) ->
      try
        require('./people/listByActivity') options
      catch error
        config.error error
    search: (options) ->
      try
        require('./people/search') options
      catch error
        config.error error