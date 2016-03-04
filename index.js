var shell = require('shelljs')
var parseSettings = require('./utils').parseSettings

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
var supportedSettings = ['entry', 'output', 'index']

/**
 * Run the parseSettings method which extracts settings from the users .enclaverc file,
 * formats them, and spits them out into the SETTING_DESTINATION file.
 */
parseSettings(SETTING_SOURCE, SETTING_DESTINATION, supportedSettings)

shell.echo('Let the drive sequence begin, hit it Pinback.')
shell.exec('cd node_modules/enclave && npm start')
