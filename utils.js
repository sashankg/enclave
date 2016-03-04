var shell = require('shelljs')

/**
 * Extracts the value of a setting. Used below, this method parses out the json-like
 * syntax leaving behind the string value of the setting.
 * @param {String} keyword - The specific setting from the settings array.
 * @param {String} setting - The grepped line where the keyword lives in the .enclaverc file.
 * @returns {String} - Pretty much changes "entry": "src/App.js", to "src/App.js"
 */
function extractValue(keyword, setting) {
  setting = setting.replace('"' + keyword + '":', '')
  setting = setting.replace(',', '')
  return setting
}

/**
 * Pulls all of the supported settings out of the the user's .enclaverc file. Essentially
 * the user should configure a json-like file where they keys match the list of supported
 * settings.
 * @param {String} from - Should be .enclaverc; the file where the settings are set by the user.
 * @param {String} to - Where the settings are sent to be parsed by webpack.
 * @param {Array} settings - An array of supported settings settings.
 */
exports.parseSettings = function (from, to, settings) {

  /**
   * Will eventually become all of the settings concatenated together.
   * @type {string}
   */
  var exportedSettings = ''

  /**
   * Create a new array of setting values.
   * @type {Array}
   */
  var values = settings.map(function (setting) {
    return extractValue(setting, shell.grep(setting, from))
  })

  /**
   * Mutating the exportedSettings string to be in node exports format.
   */
  values.map(function (value, index) {
    exportedSettings = exportedSettings + ('exports.' + settings[index] + '=' + value)
  })


  /**
   * Using shelljs's `to` method to write the string to a settings file in enclave.
   */
  exportedSettings.to(to)
}

/**
 * If a string is falsy replace it with something else.
 * @param {String} dubiousString - usually a variable, where truthiness is dubious.
 * @param {String} defaultString - a string where it's truthiness is definitely not dubious.
 * @returns {String}
 */
exports.stringSafetyNet = function(dubiousString, defaultString) {
  if (typeof dubiousString === 'string') {
    return dubiousString
  }
  return defaultString
}
