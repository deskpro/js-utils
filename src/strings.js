/**
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function trimString(str, maxLength) {
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength - 3)}...`;
  }
  return str;
}

export function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1)
}
