var colors = require('colors')
var shell = require('shelljs')
var prompt = require('prompt')
var prompts = require('./prompts')
var spinner = require('../cli-helpers/spinner')
var clientFiles = require('./clientFiles')

/**
 * Handle errors from the cli prompts.
 * @param err
 * @returns {number}
 */
function onErr(err) {
  console.log(err)
  return 1
}

/**
 * Runs the spinner for a given amount of time. Currently this isn't being used for any kind of asynchronous action
 * but rather is there to improve the UX of the CLI too. After postinstall the terminal get's flooded with a list of
 * install modules, which hides the postinstall instructions.
 * @param {number} time - How long you want the spinner to run.
 */
function preventFinishFor(time) {
  spinner.start()
  setTimeout(function () {
    spinner.stop()
  }, time)
}


/**
 * An object of strings used for inserting the start script into the user's package.json file with
 * the `shell.sed` command.
 * @type {{flag: string, insertionPoint: string, addition: string, file: string}}
 */
var insertScript = {
  flag: '-i',
  insertionPoint: '"scripts": {',
  addition: "\"scripts\": { \n    \"start\": \"node node_modules/enclave/src/index.js\",",
  file: clientFiles.package
}


/**
 * Start the CLI prompt.
 */
prompt.start()

/**
 * Throw down that postinstall logo.
 */
shell.exec('bash ./node_modules/enclave/src/cli-helpers/postinstall-logo')

/**
 * Clean out any currently existing config file for a fresh one.
 */
shell.exec('rm ' + clientFiles.config)
shell.exec('touch ' + clientFiles.config)

function configureConfigFile(err, result) {
  for (var key in result) {
    if (key === 'port' && !result[key] || key === 'port' && result[key] !== result[key]) {
      shell.echo("exports." + key + " = 8080" + '\n').toEnd(clientFiles.config)
    } else {
      shell.echo("exports." + key + " = " + JSON.stringify(result[key]) + '\n').toEnd(clientFiles.config)
    }
  }
  if (err) {
    return onErr(err)
  }
  console.log('Here\'s what I\'ve got down, if something is wrong you can edit this in your enclave.js file.:'.yellow)
  console.log('  entry: '.red + result.entry.magenta)
  console.log('  output: '.red + result.output.magenta)
  console.log(!result.port ? '  port: '.red + '8080' : '  port: '.red + result.port)
  console.log('  index: '.red + result.index.magenta)
  console.log('  live: '.red + result.live)
  console.log('To run your app, just type'.green, '$ npm start'.bold.green)
  shell.sed(insertScript.flag, insertScript.insertionPoint, insertScript.addition, insertScript.file)
  preventFinishFor(5000)
}

prompt.get(prompts, configureConfigFile)
