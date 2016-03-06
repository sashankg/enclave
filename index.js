var shell = require('shelljs')
var settings = require('./utils')

/**
 * The file where the user configures enclave.
 * @type {string}
 */
var SETTING_SOURCE = '.enclaverc'

/**
 * This file is where enclave's webpack cofig file will search for settings.
 * @type {string}
 */
var SETTING_DESTINATION = 'node_modules/enclave/settings.js'

/**
 * An array of supported settings. Expand this when you support new .enclaverc settings.
 * @type {string[]}
 */
var webpackSettings = ['entry', 'output', 'index', 'port', 'live']

/**
 * Create an array of values found in the .enclaverc file based on the webpackSettings.
 * @type {string[]}
 */
var harvestedSettings = settings.harvest(webpackSettings, SETTING_SOURCE)

/**
 * Format the harvestedSettings into a form where webpack can extract and use them.
 * @type {string}
 */
var formattedSettings = settings.format(harvestedSettings, webpackSettings)

/**
 * The harvest method currently looks for 'port' and parses then number out directly. It's stupid, I'll fix it.
 * If it can't find a port it will default to 8080
 * @type {Number}
 */
var port = settings.harvest(['port'], SETTING_SOURCE) || 8080

formattedSettings.to(SETTING_DESTINATION)
shell.echo('Let the drive sequence begin, hit it Pinback.')
shell.exec('cd node_modules/enclave && webpack && webpack-dev-server --port ' + JSON.parse(port))
