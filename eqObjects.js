const assertEqual = function(actual, expected) {
  if(actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`
  } else {
    return `❗ Assertion Failed: ${actual} !== ${expected}`
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
    return false
  } else {
    for (let value of Object.keys(o1bject)) {
      if (ob2ject[value] === undefined) {
        return false
      } else if (ob2ject[value] !== o1bject[value]) {
        if (eqArrays(o1bject[value], ob2ject[value])) {

        } else {
          return false
        }
      }
    }
  }
  return true
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false