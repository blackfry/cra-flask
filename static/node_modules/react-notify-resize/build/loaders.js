'use strict';

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    // include: path.join(__dirname, '../')
    loaders: [
      'react-hot-loader',
      'babel-loader'
    ]
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader!autoprefixer-loader'
  }
]