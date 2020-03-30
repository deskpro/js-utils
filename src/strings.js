/**
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
function trimString(str, maxLength) {
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength - 3)}...`;
  }
  return str;
}

function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function toSnakeCase(str) {
  return str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
}

export {
  trimString,
  capitalize,
  toSnakeCase
};
