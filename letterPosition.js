const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      i++;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
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

const assertArrayEqual = function(value1, value2, test) {
  if (eqArrays(value1, value2) === test) {
    return `✅ Assertion Passed: ${value1} === ${value2}`;
  } else {
    return `❗ Assertion Failed: ${value1} !== ${value2}`;
  }
};

console.log(letterPositions("lighthouse in the house"));

console.log(assertArrayEqual(letterPositions('hello').e, 1));