var Ora = require('ora')

/**
 * This is the custom spinner built for the Ora spinner library, I kind of love it.
 * I really spent too much time on this, like a couple hours.
 * @type {{interval: number, frames: string[]}}
 */
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

/**
 * An instance of the Ora spinner, using the most amazing custom spinner defined
 * above.
 * @type {Ora|exports|module.exports}
 */
var spinner = new Ora({
  text: 'Sit tight while I compile your things...',
  spinner: liquid,
  color: 'magenta',
})

module.exports = spinner
