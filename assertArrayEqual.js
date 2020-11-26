// Use both assertEqual and eqArray in single function

const eqArrays = function(actual, expected) {
  if (typeof actual !== 'object' && typeof expected !== 'object') {
    return false;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(value1, value2, calledFunction) {
  if (calledFunction(value1, value2)) {
    return `✅ Assertion Passed: ${value1} === ${value2}`;
  } else {
    return `❗ Assertion Failed: ${value1} !== ${value2}`;
  }
};


console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "3"], eqArrays));
console.log(assertArrayEqual(["1", "2", "3"], ["1", "2", "6"], eqArrays));
console.log(eqArrays(1, 1));