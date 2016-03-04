var HtmlWebpackPlugin = require('html-webpack-plugin')
var settings = require('./settings.js')
var stringSafetyNet = require('./utils').stringSafetyNet

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '../../' + stringSafetyNet(settings.index, 'index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    '../../' + stringSafetyNet(settings.entry, 'src/App.js')
  ],
  output: {
    path: '../../' + stringSafetyNet(settings.output, 'dist'),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
