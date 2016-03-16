var shell = require('shelljs')
var requiredDependencies = require('./requiredDependencies')
var spinner = require('../cli-helpers/eject-spinner')

var WEBPACK_DEV_CONFIG = './node_modules/enclave/webpack.config.js'
var WEBPACK_PROD_CONFIG = './node_modules/enclave/webpack.config.build.js'

var concatenatedDependencies = requiredDependencies.reduce(function (a, b) {
  return a + ' ' + b
})


var pathAdjustment = {
  flag: '-i',
  searchRegex: '../../',
  replacement: './',
  files: [WEBPACK_DEV_CONFIG, WEBPACK_PROD_CONFIG]
}

shell.sed(
  pathAdjustment.flag,
  pathAdjustment.searchRegex,
  pathAdjustment.replacement,
  pathAdjustment.files
)

var startScript = {
  flag: '-i',
  searchRegex: '"start": "enclave",',
  replacement: '"prestart": "webpack",\n    "start": "webpack-dev-server",',
  file: './package.json'
}

shell.sed(
  startScript.flag,
  startScript.searchRegex,
  startScript.replacement,
  startScript.file
)

shell.mv(WEBPACK_DEV_CONFIG, './webpack.config.js')
shell.mv(WEBPACK_PROD_CONFIG, './webpack.config.build.js')

spinner.start()
var child = shell.exec('npm i -S ' + concatenatedDependencies, {async: true, silent: true})
child.stdout.on('data', function(data) {
  console.log('bye felicia...')
  spinner.stop()
})
