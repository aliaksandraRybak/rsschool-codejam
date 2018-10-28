const assert = require('assert');
const sumOfOthers = require('../sumOfOthers.js');


describe('sumOfOthers', () => {
  it('1', () => {
    const arr = sumOfOthers([6, 1, 0, 8, 2, 6]);
    assert.deepEqual(arr, [17, 22, 23, 15, 21, 17]);
  });

  it('2', () => {
    const arr = sumOfOthers([1, 2, 3, 4, 5]);
    assert.deepEqual(arr, [14, 13, 12, 11, 10]);
  });

  it('3', () => {
    const arr = sumOfOthers([30, 55, 1, 41, 12, 10, 4]);
    assert.deepEqual(arr, [123, 98, 152, 112, 141, 143, 149]);
  });

  it('4', () => {
    const arr = sumOfOthers([100, 100, 100]);
    assert.deepEqual(arr, [200, 200, 200]);
  });

  it('5', () => {
    const arr = sumOfOthers([43, 71, 14, 58, 46, 19, 83, 51]); //385
    assert.deepEqual(arr, [342, 314, 371, 327, 339, 366, 302, 334]);
  });
});