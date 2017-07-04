'use strict'

function notEmpty(x){ return !!x }

var hot = require('./env').HOT

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [hot ? 'react-hot' : null, 'babel'].filter(notEmpty)
  },
  {
    test: /\.css$/,
    loader: 'style!css?modules&importLoaders=1&localIdentName=[local]---[hash:6]!autoprefixer',
    exclude: [
      /node_modules/
    ]
  }
];
