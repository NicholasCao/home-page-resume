const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.posix.join('static','js/[name]-[hash].js'),
    chunkFilename: path.posix.join('static','js/[id].[chunkhash].js')
  },
  devtool: 'null',
  plugins: [
    new CleanWebpackPlugin(path.resolve('./dist/*'), {
      root: path.resolve('..'),
      verbose: true,
      dry: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new ExtractTextPlugin({
    //   filename: path.posix.join('static','css/[name].[contenthash].css'),
    //   allChunks: true,
    // }),
  ]
});
