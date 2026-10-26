function isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n);
}

function clamp(value, min, max) {
  if (!isNumber(value) || !isNumber(min) || !isNumber(max)) {
    throw new TypeError('clamp expects numbers');
  }
  if (min > max) {
    throw new RangeError('clamp expects min <= max');
  }
  return Math.min(Math.max(value, min), max);
}

module.exports = { clamp };
