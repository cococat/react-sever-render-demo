const path = require('path');

module.exports = {
  entry: './isomorphism/hello/index.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'hello.js'
  },
  module: {
    rules: [
        { test: /\.js$/, use: 'babel-loader' }
      ]
  }
};