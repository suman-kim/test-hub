const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('./sum');

test('returns the total of an array of numbers', () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([-1, 1, 0.5]), 0.5);
});

test('returns 0 for an empty array', () => {
  assert.equal(sum([]), 0);
});

test('throws TypeError when the argument is not an array', () => {
  for (const value of [undefined, null, 5, '123', { length: 1 }]) {
    assert.throws(() => sum(value), TypeError);
  }
});
