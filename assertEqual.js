const assertEqual = function(actual, expected) {

  return actual === expected;
};
console.assert(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.assert(assertEqual(1, 2));