const eqArrays = function(actual, expected) {
  let isEqual = true
  // for loop starting i = 0 until i < actual/expected.length i++
  // if actual[i] === expected[i]
  // return true
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      isEqual = false
    }
  }
  
  // if (actual === expected) {
  //   console.log('hi')
  //   return true
  // } else {
  //   return false
  // }
  return isEqual
};


console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // =