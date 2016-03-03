var shell = require('shelljs');
shell.cat('../../.enclaverc')
shell.echo('Let the drive sequence being, hit it Pinback.');
shell.exec('cd node_modules/enclave && npm start');
