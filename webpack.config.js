const path = require('path')

module.exports = {
  entry: './src/index',

  mode: 'production',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['env']
        }
      }
    ]
  },

  plugins: []
}
