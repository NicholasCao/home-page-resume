const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
  entry:  __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader?cacheDirectory=true'],
        exclude:  __dirname + '/node_modules/'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [path.resolve(__dirname, 'src')],
        options: {
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html'
    })
  ]
}
