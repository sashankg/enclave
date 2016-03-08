var Ora = require('ora')

var liquid = {
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
}

var spinner = new Ora({
  text: 'Sit tight while I compile your things...',
  spinner: liquid,
  color: 'magenta',
})

module.exports = spinner
