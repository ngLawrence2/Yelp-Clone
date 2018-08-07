var path = require('path');

module.exports = {
  entry: './frontend/yelpClone.jsx',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts')
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
