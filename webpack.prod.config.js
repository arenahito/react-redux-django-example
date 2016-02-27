var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var config = require('./webpack.base.config.js');


config.output.path = require('path').resolve('./assets/dist');

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-prod.json'}),

  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }}),

  new webpack.optimize.OccurenceOrderPlugin(),

  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]);

config.module.loaders.push(
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: [
      "react-hot",
      "babel?presets[]=react,presets[]=es2015"
    ]
  }
);

module.exports = config;
