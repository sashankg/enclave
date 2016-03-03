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
