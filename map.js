const words = ["ground", "control", "to", "major", "tom"];
const things = ['thing1', 'thing2'];


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
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

const results1 = map(words, word => word[0]);
const results2 = map(things, word => word[0]);
console.log(results1);

console.log(assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't'], eqArrays));
console.log(assertArrayEqual(results2, ['t', 't'], eqArrays));
