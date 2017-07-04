var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {
  devtool: 'source-map',
  entry: [
    './lib/src/index',
  ],

  output: {
    library: 'react-loading-order-with-animation',
    libraryTarget: 'umd',
    filename: '../lib/dist/index.min.js',
    path: path.join(__dirname, '../lib/'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'lib/src'],
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?stage=0&loose[]=es6.modules'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loader: 'css?localIdentName=[path]!postcss-loader!sass',
    }],
  },

  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions', 'safari 5', 'ie 9', 'ios 6', 'android 4'] }), csswring];
  },
};
