const eqArrays = function(actual, expected) {
  let isEqual = false;
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      isEqual = false;
    } else {
      isEqual = true;
    }
  }
  return isEqual;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

const assertArrayEqual = function (value1, value2, test) {
  return assertEqual(eqArrays(value1, value2), test)
}

console.log(assertEqual(eqArrays("Lighthouse Labs", "Lighthouse Labs"), true));
console.log(assertEqual(eqArrays(1, 2), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));// => false
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false

console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "3"], true))