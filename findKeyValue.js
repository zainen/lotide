const assertEqual = function(actual, expected) {
  if(actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`
  } else {
    return `❗ Assertion Failed: ${actual} !== ${expected}`
  }
};

const findKeyByValue = function(theObject, value) {
  for (let item in theObject) {
    if (theObject[item] === value)  {
      return item
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));