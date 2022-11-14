const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: 'asset/resourse',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
};