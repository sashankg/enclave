var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var settings = require('../../enclave.js')
var stringSafetyNet = require('./src/utils/javascriptUtils').stringSafetyNet
var pathPrefix = '../../'

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: pathPrefix + stringSafetyNet(settings.index, 'index.html'),
  filename: 'index.html',
  inject: 'body'
})

var UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
})

module.exports = {
  entry: [
    pathPrefix + stringSafetyNet(settings.entry, 'App.js')
  ],
  resolve: {
    modulesDirectories: ['./node_modules/enclave/node_modules', 'node_modules']
  },
  output: {
    path: pathPrefix + stringSafetyNet(settings.output, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-0', 'es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.(otf|eot|ttf|woff|png|jpe?g|txt)/i,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.[s]?css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    UglifyJsPluginConfig,
    new webpack.optimize.DedupePlugin(),
    new NpmInstallPlugin({
      save: true
    })
  ],
  devServer: {
    contentBase: pathPrefix + stringSafetyNet(settings.output, 'dist'),
    hot: true,
  }
}
