  // Use both assertEqual and eqArray in single function

const eqArrays = function(actual, expected) {
  if (typeof actual !== 'object' && typeof expected !== 'object') {
    return false
  }
  if (actual.length !== expected.length) {
    return false
  }
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    } 
  }
  return true;
};

//check if same with message

const assertEqual = function(actual, expected) {
  if(actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`
  } else {
    return `❗ Assertion Failed: ${actual} !== ${expected}`
  }
};

const assertArrayEqual = function (value1, value2, test) {
  if (eqArrays(value1, value2) === test) {
  return `✅ Assertion Passed: ${value1} === ${value2}`
  } else {
  return `❗ Assertion Failed: ${value1} !== ${value2}`
  }
}

// console.log(assertEqual(eqArrays("Lighthouse Labs", "Lighthouse Labs"), true));
// console.log(assertEqual(eqArrays(1, 2), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false)); // => true
// console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));// => false
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false

console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "3"], true))
console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "6"], true))

console.log(assertEqual(1, 1))
console.log(eqArrays(1, 1))