const assert = require('chai').assert
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]).length;
// console.log(assertEqual(result, ["Lighthouse", "Labs"].length)); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

describe('#tail', () => {
  it('return length of array equal', () => {
    const words = ['hello', 'lighthouse', 'labs']
    assert.strictEqual(tail(words).length, 2)
  })
  it('return length of original arrray unchanged', () => {
    const words = ['hello', 'lighthouse', 'labs']
    assert.strictEqual(words.length, 3)

  })
}) 