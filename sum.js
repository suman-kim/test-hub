function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('sum expects an array of numbers');
  }
  return numbers.reduce((total, n) => total + n, 0);
}

module.exports = { sum };
