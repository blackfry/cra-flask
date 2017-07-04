'use strict';

/**
 * The webpack context is set to the project root folder
 * so relative paths will asume that folder, and not /webpack
 */

var env = require('./env');

var result = []

if (env.HOT === true){
  result = [
    'webpack/hot/only-dev-server'
  ]
}


module.exports = result.concat([
  './index.js'
]);
