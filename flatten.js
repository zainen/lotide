const flatten = (array) => {
  let newArray = []
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let a of item) {
        newArray.push(a)
      }
    } else {
      newArray.push(item)
    }
  }
  return newArray
}
console.log(flatten([1, 2, [3, 4], 5, [6]]))