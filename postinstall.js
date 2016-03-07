var colors = require('colors')
var shell = require('shelljs')
var prompt = require('prompt')
var prompts = require('./prompts')
prompt.start()

function onErr(err) {
  console.log(err)
  return 1
}

prompt.get(prompts, function (err, result) {
  shell.exec('rm ../../.enclaverc')
  shell.exec('touch ../../.enclaverc')
  for (var key in result) {
    shell.echo("module.exports " + key + " = " + JSON.stringify(result[key]) + '\n').toEnd('../../.enclaverc')
  }
  if (err) { return onErr(err) }
  console.log('Here\'s what I\'ve got down, if something is wrong you can edit this in your .enclaverc file.:'.yellow)
  console.log('  entry: '.red + result.entry.magenta)
  console.log('  output: '.red + result.output.magenta)
  console.log('  port: '.red + result.port.magenta)
  console.log('  index: '.red + result.index.magenta)
  console.log('  live: '.red + result.live.magenta)
  console.log('To run your app, just type'.green, '$ npm start'.bold.green)
  var newScript = "\"scripts\": { \n    \"start\": \"node node_modules/enclave/index.js\","
  shell.sed('-i', '"scripts": {', newScript, '../../package.json');
})
