var shell = require('shelljs')

shell.exec('cd node_modules/enclave && NODE_ENV=production webpack --color -p --config webpack.config.build.js')
