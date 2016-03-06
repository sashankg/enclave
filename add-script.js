var shell = require('shelljs')
/**
 * This replaces the scripts line in the package json and adds it
 * back in with an enclave script
 * @type {string}
 */
var newScript = "\"scripts\": { \n    \"start\": \"node node_modules/enclave/index.js\","

/**
 * This command goes ahead and adds it.
 */
shell.sed('-i', '"scripts": {', newScript, '../../package.json');

