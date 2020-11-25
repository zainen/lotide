//check if same with message

const assertEqual = function(actual, expected) {
  if(actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`
  } else {
    return `❗ Assertion Failed: ${actual} !== ${expected}`
  }
};
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(1, 2));