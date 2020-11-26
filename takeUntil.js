const takeUntil = (array, callback) => {
  let newArray  = []
  for (let item of array) {
    if (callback(item)) {
      return newArray
    } else {
      newArray.push(item)
    }
  }
}
console.log(x => x < 0)

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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
console.log(assertArrayEqual(results1, [ 1, 2, 5, 7, 2], eqArrays));
