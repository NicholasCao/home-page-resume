const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry:  path.resolve('./src/main.js'),
  output: {
    path: path.resolve('./dist'),
    filename: "[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader?cacheDirectory=true'],
        include: [path.resolve('../src')],
        exclude:  __dirname + '/node_modules/'
      }, 
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [path.resolve('../src')],
        options: {
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }, 
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }, 
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
