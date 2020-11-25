const eqArrays = function(actual, expected) {
  if(actual === expected) {
    return true
  } else {
    return false
  }
};
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`
  }
};


console.log(assertEqual(eqArrays("Lighthouse Labs", "Lighthouse Labs"), true));
console.log(assertEqual(eqArrays(1, 2)));