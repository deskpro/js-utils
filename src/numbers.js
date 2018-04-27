export const THOUSANDTHS_SEPARATOR = ',';
export const DECIMAL_POINT = '.';

/**
 * Formats a number to include commas (or any separator) in the thousandths place
 *
 * @param {number} number Number to format
 * @param {number} decimals Number of decimals to show
 * @param {string} decPoint
 * @param {string} separator Separator character
 * @returns {string}
 */
export function numberFormat(num, decimals = 0, decPoint = DECIMAL_POINT, separator = THOUSANDTHS_SEPARATOR) {
  // Strip all characters but numerical ones.
  const number = (num + '').replace(/[^0-9+\-Ee.]/g, '');
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = (typeof separator === 'undefined') ? ',' : separator;
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec);
    return '' + Math.round(n * k) / k;
  };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  let s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
 * Returns a random whole number between min and max
 *
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns {number}
 */
export function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
