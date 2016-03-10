var shell = require('shelljs')

/**
 * The postinstall script will generate an `enclave.js`file in the root of the users project.
 * Enclave then references that file for certain supported settings.
 * @type {exports|module.exports}
 */
var userSettings = require('../../../enclave.js')

/**
 * Runs the actual webpack build. Would really like to eventually do something about webpack's output.
 * It's big and messy, it would be nice to have enclave mask it.
 */
shell.echo('Let the drive sequence begin, hit it Pinback.')
shell.exec('cd node_modules/enclave && webpack --color && webpack-dev-server --colors --port ' + JSON.parse(userSettings.port))
