const assertEqual = require('./assertEqual');

const tail = (arr) => {
  let results = [];
  for (let i = 1; i < arr.length; i++) {
    results.push(arr[i]);
  }
  return results;
};

// const result = tail(["Hello", "Lighthouse", "Labs"]).length;
// console.log(assertEqual(result, ["Lighthouse", "Labs"].length)); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

module.exports = tail;