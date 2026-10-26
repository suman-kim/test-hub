const { test } = require('node:test');
const assert = require('node:assert/strict');
const { clamp } = require('./clamp');

test('returns the value when it is within the range', () => {
  assert.equal(clamp(42, 0, 100), 42);
  assert.equal(clamp(-2.5, -10, 10), -2.5);
});

test('clamps values outside the range to the nearest bound', () => {
  assert.equal(clamp(-5, 0, 100), 0);
  assert.equal(clamp(130, 0, 100), 100);
});

test('returns the bound when the value equals it', () => {
  assert.equal(clamp(0, 0, 100), 0);
  assert.equal(clamp(100, 0, 100), 100);
});

test('returns min when min equals max', () => {
  assert.equal(clamp(3, 7, 7), 7);
  assert.equal(clamp(7, 7, 7), 7);
  assert.equal(clamp(9, 7, 7), 7);
});

test('accepts Infinity as a valid number', () => {
  assert.equal(clamp(Infinity, 0, 10), 10);
  assert.equal(clamp(-Infinity, 0, 10), 0);
  assert.equal(clamp(5, -Infinity, Infinity), 5);
  assert.equal(clamp(Infinity, 0, Infinity), Infinity);
});

test('throws TypeError when any argument is not a number', () => {
  for (const bad of [undefined, null, '5', NaN, {}]) {
    assert.throws(() => clamp(bad, 0, 10), new TypeError('clamp expects numbers'));
    assert.throws(() => clamp(5, bad, 10), new TypeError('clamp expects numbers'));
    assert.throws(() => clamp(5, 0, bad), new TypeError('clamp expects numbers'));
  }
});

test('throws RangeError when min is greater than max', () => {
  assert.throws(() => clamp(5, 10, 0), new RangeError('clamp expects min <= max'));
});
