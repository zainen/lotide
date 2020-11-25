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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

// variable for wanted
// loop to go through gotten 
// loop to go compare gotten to unwated
// if gotten isnt unwanted push to wanted

const without = function(received, unwanted) {
let treats = [];
let check 
  for (let g = 0; g < received.length; g++) {
    for (let n = 0; n < unwanted.length; n++) {
      if (received[g] != unwanted[n]) {
        check = true
      } else {
        check = false
      }
    }
    if (check === true) {
      treats.push(received[g])
    }
  }
  return treats;
};

console.log(without([1, 2, 3], [1]))// => [2, 3])
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"])
