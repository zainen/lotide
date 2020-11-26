const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❗ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let name of allItems) {
    if (itemsToCount[name]) { // value of the key to pass if statement
      if (!result[name]) {
        result[name] = 1;
      } else {
        result[name] += 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
