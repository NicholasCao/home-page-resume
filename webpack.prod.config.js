const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: 'production',
  entry:  __dirname + '/src/main.js',
  output: {
    path: __dirname + "/dist",
    filename: "[name]-[hash].js"
  },
  devServer: {
    contentBase: './dist', //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true
  },
  devtool: 'null',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader?cacheDirectory=true'],
        exclude:  __dirname + '/node_modules/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html' //new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('dist/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
};
