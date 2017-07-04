var webpack = require('webpack')
var assign = require('object-assign')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var env = require('./env')
var envStringified = assign({}, env)

Object.keys(env).forEach(function(k){
  envStringified[k] = JSON.stringify(env[k])
})

var definePlugin = new webpack.DefinePlugin({
  //we expose all vars exported by env.js to the client
  //so please do not add any sensitive info
  'process.env': envStringified,
  '__DEV__': env.NODE_ENV === 'development'
})

module.exports = [
  new ExtractTextPlugin('index.css'),
  definePlugin
]
