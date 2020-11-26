const assertEqual = function(actual, expected) {
  if(actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`
  } else {
    return `❗ Assertion Failed: ${actual} !== ${expected}`
  }
};

const countLetters = function (input) {
  let result = {}
  for (let letter of input) {
    if (letter === ' ') {

    } else if (letter === '.') {

    } else {
      if (result[letter]) {
        result[letter] += 1
      } else {
        result[letter] = 1
      }
    }
  }
  return result
}
console.log(countLetters('Lighthouse Labs.'))