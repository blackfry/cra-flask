'use strict';

var path = require('path');
var assign = require('object-assign');
var webpack = require('webpack');

var config = require('./build.config');
var plugins = require('./plugins');

var env = require('./env');
var HOT = env.HOT;
var PUBLIC = config.output.publicPath;

function notEmpty(x){ return !!x }

if (HOT === true){
  console.log('Starting dev server with HOT RELOAD!\n');
}

var entry = config.entry;

entry.pop()
entry.push('./index.js')

module.exports = assign({}, config, {

  externals: {},

  plugins: plugins.concat([
    HOT && new webpack.HotModuleReplacementPlugin()
  ]).filter(notEmpty),

  devServer: {
    publicPath: PUBLIC,
    port: env.PORT,
    host: '0.0.0.0',
    hot: HOT,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../')
  }
})