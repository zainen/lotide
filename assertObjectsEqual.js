const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❗ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(o1bject, ob2ject) {
  if (Object.keys(o1bject).length !== Object.keys(ob2ject).length) {
    return false;
  } else {
    for (let value of Object.keys(o1bject)) {
      if (ob2ject[value] === undefined) {
        return false;
      } else if (ob2ject[value] !== o1bject[value]) {
        if (eqArrays(o1bject[value], ob2ject[value])) {
          null;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(value1, value2) {
  if (eqObjects(value1, value2) === true) {
    return `✅ Assertion Passed: ${Object.entries(value1)} === ${Object.entries(value2)}`;
  } else {
    return `❗ Assertion Failed: ${Object.entries(value1)} === ${Object.entries(value2)}`;
  }
};
let a = {
  1: 'asdf',
  2: 'zxcv'
};
let b = {
  2: 'zxcv',
  1: 'asdf'
};
console.log(assertObjectsEqual(a, b, true));