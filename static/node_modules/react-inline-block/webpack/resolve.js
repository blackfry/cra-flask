'use strict'

var path = require('path')

module.exports = {
  alias: {
    src: path.resolve('src')
  },

  //required modules that are not relative paths
  //will be searched in node_modules AND react_components
  //so we can use react_components to write custom React components
  //and use them as if they were installed from npm
  modulesDirectories: [
    'node_modules',
    'app_modules'
  ]
}
