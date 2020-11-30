// Use both assertEqual and eqArray in single function

const eqArrays = require('./eqArrays')

const assertArrayEqual = function(value1, value2) {
  if (eqArrays(value1, value2)) {
    return `✅ Assertion Passed: ${value1} === ${value2}`;
  } else {
    return `❗ Assertion Failed: ${value1} !== ${value2}`;
  }
};

module.exports = assertArrayEqual;
// console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "3"], eqArrays));
// console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "6"], eqArrays));
// console.log(eqArrays(1, 1));