const assertArrayEqual = function (value1, value2, test) {
  if (eqArrays(value1, value2) === test) {
  return `✅ Assertion Passed: ${value1} === ${value2}`
  } else {
  return `❗ Assertion Failed: ${value1} !== ${value2}`
  }
}

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

const middle = function(arr) {
  let array = []
  if (arr.length <= 2) {
    return array
  } else if (arr.length % 2 === 0) {
    array.push(arr[arr.length / 2 - 1])
    array.push(arr[arr.length / 2])
    return array
  } else if (arr.length > 2 && arr.length % 2 === 1) {
    let num = arr.length / 2
    num = Math.floor(num)
    array.push(arr[num])
    return arr[num]
  }
  return array
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(assertArrayEqual(middle([2]), [], true))