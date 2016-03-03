var shell = require('shelljs')
var userSettings = require('../../enclave.js')
shell.echo('Let the drive sequence begin, hit it Pinback.')
shell.exec('cd node_modules/enclave && webpack && webpack-dev-server --port ' + JSON.parse(userSettings.port))
