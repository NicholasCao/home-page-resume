const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  context: path.resolve(__dirname, '../'),
  entry:  path.resolve('./src/main.js'),
   output: {
    path: path.resolve('../dist'),
    filename: "[name].js",
    publicPath: '/',
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
        enforce: 'pre',
        include: [path.resolve('../src')],
        options: {
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }, 
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader']
      }, 
      {
        test: /\.less$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static','img/[name].[hash:7].[ext]')
        }
      }, 
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
  ]
}
