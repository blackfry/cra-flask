'use strict'

var assign = require('object-assign')
var hasOwn = require('hasown')

/**
 * parseKeys accepts an object and returns another object
 * with the same structure, but the values in object keys
 * are evaluated with JSON.parse, if it is possible
 *
 * This makes an env like : { HOT_RELOAD: 'true' } into an object
 * with { HOT_RELOAD: true }
 */
var parseKeys = require('parse-keys')
var ENV = process.env

function filterKeys(object, keys){
  var result = {}

  if (!Array.isArray(keys)){
    return assign(result, object)
  }

  keys.forEach(function(k){
    if (hasOwn(object, k)){
      result[k] = object[k]
    }
  })

  return result
}

/**
 * Only keys specified in the defaults object
 * will be copied from process.env to the exported ENV object
 *
 */
var defaults = require('./defaults.env')

/**
 * the exported object is available in the client
 * so please do not add any sensitive info
 */
module.exports = parseKeys(
  assign(
    defaults,
    filterKeys(ENV, Object.keys(defaults))
  )
)
