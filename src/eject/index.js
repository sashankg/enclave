var shell = require('shelljs')
var requiredDependencies = require('./requiredDependencies')
var spinner = require('../cli-helpers/eject-spinner')

/**
 * The path of the current webpack.config file.
 * @type {string}
 */
var WEBPACK_DEV_CONFIG = './node_modules/enclave/webpack.config.js'

/**
 * The path of the current webpack.config.build file.
 * @type {string}
 */
var WEBPACK_PROD_CONFIG = './node_modules/enclave/webpack.config.build.js'

/**
 * A string of space separated dependency names to be run in an install script.
 * @type {string}
 */
var concatenatedDependencies = requiredDependencies.reduce(function (a, b) {
  return a + ' ' + b
})

/**
 * The settings for the `shell.sed` command to change all `../../` paths to `./`
 * @type {{flag: string, searchRegex: string, replacement: string, files: *[]}}
 */
var pathAdjustment = {
  flag: '-i',
  searchRegex: '../../',
  replacement: './',
  files: [WEBPACK_DEV_CONFIG, WEBPACK_PROD_CONFIG]
}

// Execution of said sed command.
shell.sed(
  pathAdjustment.flag,
  pathAdjustment.searchRegex,
  pathAdjustment.replacement,
  pathAdjustment.files
)

/**
 * The settings for the `shell.sed` command to remove the old `npm start` script
 * and replace it with a new, localized, enclave free script.
 * @type {{flag: string, searchRegex: string, replacement: string, file: string}}
 */
var startScript = {
  flag: '-i',
  searchRegex: '"enclave-serve": "enclave",',
  replacement: '"prestart": "webpack",\n    "start": "webpack-dev-server",',
  file: './package.json'
}


// The actual execution of the startScript defined above.
shell.sed(
  startScript.flag,
  startScript.searchRegex,
  startScript.replacement,
  startScript.file
)

// Literally moving the webpack configuration files up to the application's root.
shell.mv(WEBPACK_DEV_CONFIG, './webpack.config.js')
shell.mv(WEBPACK_PROD_CONFIG, './webpack.config.build.js')

// Start the spinner before running the `npm i` command.
spinner.start()

/**
 * Takes concatenatedDependencies and runs an install script over them. Then stops
 * the spinner once the async action has finished.
 * @type {Array|{index: number, input: string}}
 */
var installDeps = shell.exec('npm i -S ' + concatenatedDependencies, {async: true, silent: true})
installDeps.stdout.on('data', function(data) {
  console.log('bye felicia...')
  spinner.stop()
})
