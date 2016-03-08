var colors = require('colors')
var shell = require('shelljs')
var prompt = require('prompt')
var prompts = require('./prompts')
const Ora = require('ora');

const spinner = new Ora({
  text: 'Sit tight while I compile your things...',
  spinner: {
    "interval": 50,
    "frames": [
      "▁▆▃▃▄▆▅▄▅▁▁▆▃▃▄▆",
      "▃▅▁▁▃▅▄▃▄▃▃▅▁▁▃▅",
      "▄▄▃▃▁▄▃▁▃▄▄▄▃▃▁▄",
      "▅▃▄▄▃▃▁▃▁▅▅▃▄▄▃▃",
      "▆▁▅▅▄▁▃▄▃▆▆▁▅▅▄▁",
      "▇▃▆▆▅▃▄▅▄▇▇▃▆▆▅▃",
      "▆▄▇▇▆▄▅▆▅▆▆▄▇▇▆▄",
      "▅▅▆▆▇▅▆▇▆▅▅▅▆▆▇▅",
      "▄▆▅▅▆▆▇▆▇▄▄▆▅▅▆▆",
      "▃▇▄▄▅▇▆▅▆▃▃▇▄▄▅▇",
    ]
  },
});
spinner.color = 'green'
prompt.start()

function onErr(err) {
  console.log(err)
  return 1
}
shell.exec('bash ./asciiart')
prompt.get(prompts, function (err, result) {
  shell.exec('rm ../../enclave.js')
  shell.exec('touch ../../enclave.js')
  for (var key in result) {
    if (key === 'port' && !result[key] || key === 'port' && result[key] !== result[key]) {
      shell.echo("exports." + key + " = 8080" + '\n').toEnd('../../enclave.js')
    } else {
      shell.echo("exports." + key + " = " + JSON.stringify(result[key]) + '\n').toEnd('../../enclave.js')
    }
  }
  if (err) { return onErr(err) }
  console.log('Here\'s what I\'ve got down, if something is wrong you can edit this in your enclave.js file.:'.yellow)
  console.log('  entry: '.red + result.entry.magenta)
  console.log('  output: '.red + result.output.magenta)
  console.log(!result.port ? '  port: '.red + '8080' : '  port: '.red + result.port)
  console.log('  index: '.red + result.index.magenta)
  console.log('  live: '.red + result.live)
  console.log('To run your app, just type'.green, '$ npm start'.bold.green)
  var newScript = "\"scripts\": { \n    \"start\": \"node node_modules/enclave/index.js\","
  spinner.start();
  setTimeout(() => {
    spinner.stop()
  }, 5000)
  shell.sed('-i', '"scripts": {', newScript, '../../package.json');
})
