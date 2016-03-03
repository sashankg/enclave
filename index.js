var shell = require('shelljs');

exports.run = shell.exec('node node_modules/enclave/index.js');

shell.echo('Let the drive sequence being, hit it Pinback.');
shell.exec('cd node_modules/enclave && npm start');
