const assert = require('assert');
const recursion = require('../recursion.js');


describe('recursion', () => {
  it('1', () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90, 120], [70,99,110,130]]);
  });

  it('2', () => {
    const tree = {"value":50,"left":{"value":20,"left":{"value":9, "right":{"value": 17}},"right":{"value":31}},"right":{"value":75,"left":{"value":63},"right":{"value":79, "left":{"value": 76}}}};
    const array = recursion(tree);
    assert.deepEqual(array, [[50], [20, 75], [9, 31, 63, 79], [17, 76]]);
  });

  it('3', () => {
    const tree = {"value":48,"left":{"value":21,"left":{"value":10, "right":{"value": 19, "left":{"value": 17}}}}};
    const array = recursion(tree);
    assert.deepEqual(array, [[48], [21], [10], [19], [17]]);
  });       
});