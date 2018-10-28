const assert = require('assert');
const make = require('../make.js');


describe('make', () => {
  it('1', () => {
    function sum(a, b) {
      return a + b;
    }

    const res = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(res, 777);
  });

  it('2', () => {
    function mult(a, b) {
      return a * b;
    }

    const res = make(2, 6, 1)(3, 10)(mult);
    assert.deepEqual(res, 360);
  });

  it('3', () => {
    function conc(a, b) {
      return a.concat(b);
    }

    const res = make("I ")("am", " learning", " Java")("Script")(conc);;
    assert.deepEqual(res, "I am learning JavaScript");
  });     
});