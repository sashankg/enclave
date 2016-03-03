var shell = require('shelljs');
var setting = shell.grep('entry', '.enclaverc');
exportedSetting = 'exports.entry = {' + setting + '}';
exportedSetting.to('node_modules/enclave/settings.js');
shell.echo('Let the drive sequence begin, hit it Pinback.');
shell.exec('cd node_modules/enclave && npm start');
