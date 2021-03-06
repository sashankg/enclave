/**
 * A list of dependencies which are installed into enclave, but will be necessary
 * for a project if enclave is ejected.
 * @type {string[]}
 */
var requiredDependencies = [
  'babel-core',
  'babel-loader',
  'babel-preset-es2015',
  'babel-preset-react',
  'babel-preset-stage-0',
  'css-loader',
  'file-loader',
  'history',
  'html-webpack-plugin',
  'json-loader',
  'node-sass',
  'raw-loader',
  'react-hot-loader',
  'sass-loader',
  'style-loader',
  'url-loader',
  'webpack',
  'webpack-dev-server',
]

module.exports = requiredDependencies
