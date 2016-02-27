var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var config = require('./webpack.base.config.js');


config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './assets/js/index'
];

config.output.publicPath = 'http://localhost:3000/assets/bundles/';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats-dev.json'})
]);

// Add a loader for JSX files with react-hot enabled
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

config.devtool = "#inline-source-map";

module.exports = config;
