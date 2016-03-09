/**
 * These are the paths for files that live in the user's application root. If we want to change where
 * they live, or their names / file types we can do that here. Anything referencing the `enclave.js` or
 * `package.json` files should use this object.
 * @type {{package: string, config: string}}
 */
var clientFiles = {
  package: '../../package.json',
  config: '../../enclave.js'
}

module.exports = clientFiles
