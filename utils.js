var shell = require('shelljs')

/**
 * Extracts the value of a setting. Used below, this method parses out the json-like
 * syntax leaving behind the string value of the setting. It also checks for a port keyword,
 * and does a direct JSON.parse on it to extract the number value. This seems kind of dirty
 * so I am open to updating it to be something a bit cleaner, perhaps JSON.parsing all values
 * and then having another method stringify if they're not bool, objects, arrays, or integrers.
 * @param {string} keyword - The specific setting from the settings array.
 * @param {string} setting - The grepped line where the keyword lives in the .enclaverc file.
 * @returns {string} - Pretty much changes "entry": "src/App.js", to "src/App.js"
 */
function extractValue(keyword, setting) {
  setting = setting.replace('"' + keyword + '":', '')
  setting = setting.replace(',', '')
  if (keyword === 'port') {
    if (setting) {
      return JSON.parse(setting)
    }
    return 8080
  }
  return setting
}

/**
 * Maps over an array of settings and calls extractValue on each of them, returning the value.
 * @param {string[]} settings - A list of settings to be searched for and harvested.
 * @param {string} from - The path of the file we are searching from.
 * @returns {string[]} - An array of the harvested values
 */
exports.harvest = function (settings, from) {
  return values = settings.map(function (setting) {
    return extractValue(setting, shell.grep(setting, from))
  })
}

/**
 * Formats the list of values specifically for the settings file. This method will take a value like "entry"
 * and turn it into exports.entry = "app.js". It feels kind of flimsy because it relies on the settings and values
 * to both be arrays with matching indices. Gotta refactor that house of cards.
 * @param {Array} values - An array of setting values extracted from the settings file.
 * @param {Array} settings - An array of settings from the index file.
 * @returns {string} - A concatenated and formatted string to be parsed by webpack.
 */
exports.format = function (values, settings) {
  var exportedSettings = ''
  values.map(function (value, index) {
    exportedSettings = exportedSettings + ('exports.' + settings[index] + '=' + value)
  })
  return exportedSettings
}

/**
 * If a string is falsy replace it with something else.
 * @param {string} dubiousString - usually a variable, where truthiness is dubious.
 * @param {string} defaultString - a string where it's truthiness is definitely not dubious.
 * @returns {string}
 */
exports.stringSafetyNet = function (dubiousString, defaultString) {
  if (typeof dubiousString === 'string') {
    return dubiousString
  }
  return defaultString
}
