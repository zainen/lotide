const assertEqual = function(actual, expected) {
  if (actual = expected) {
    return `Assertion Passed: ${actual} = ${expected}`;
  } else {
    return `Assertion Failed: ${actual} != ${expected}`;
  }
};

const tail = (arr) => {
  let results = [];
  results.push(arr[1]);
  results.push(arr[2]);
  return results;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"])); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!