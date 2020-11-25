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



console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // =