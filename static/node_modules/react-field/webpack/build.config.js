'use strict'

var path = require('path')

var entry = require('./entry')
var context = require('./context')
var resolve = require('./resolve')
var plugins = require('./plugins')

var PUBLIC = '/assets'

module.exports = {
  //devtool: 'eval',
  devtool: 'source-map',
  context: context,
  entry: entry,
  output: {
    path: path.resolve('./dist'),
    publicPath: PUBLIC,
    filename: 'index.js'
  },
  module: {
    loaders: require('./loaders')
  },
  externals: {
    react: 'React'
  },
  resolve: resolve,
  plugins: plugins
}
