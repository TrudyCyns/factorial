const assert = require('chai').assert;
const { it, describe } = require('mocha');
const factorial = require('../factorial');

describe('Factorial', () => {
  it('0! = 1', () => {
    assert.equal(factorial(0), 1);
  });
  it('1! = 1', () => {
    assert.equal(factorial(1), 1);
  });
  it('5! = 120', () => {
    assert.equal(factorial(5), 120);
  });
  it('7! = 5040', () => {
    assert.equal(factorial(7), 5040);
  });
  it('10!', () => {
    assert.equal(factorial(10), 3628800);
  });
});
