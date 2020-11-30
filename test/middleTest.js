const assert = require('chai').assert
const middle = require('../middle')
const assertArrayEqual = require('../assertArrayEqual')

// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
// console.log(assertArrayEqual(middle([2]), []))
// console.log(assertArrayEqual(middle([1,2,3]), 2))
// console.log(assertArrayEqual(middle([1,2,3,4]), [2,3]))


describe('#middle', () => {
  it('return middle length < 3 = []', () => {
    const arr = [1,2]
    console.log(middle(arr))
    assert.isTrue(middle(arr).length === 0)
  })
  it('return middle length odd > 3 ', () => {
    const arr = [1,2,3]
    console.log(middle(arr))
    assert.isTrue(middle(arr) === 2)
  })
  it('return middle 2, 3 if length even > 2', () => {
    const arr = [1,2,3,4]
    console.log(middle(arr))
    assertArrayEqual(middle(arr), [2, 3])
  })
})