const assert = require('chai').assert;
const InsertionSort = require('../scripts/insertion-sort');

describe('insertion sort', () => {

  it('should sort an array of numbers using the insertion sort method', () => {
    let testArray = [7, 5, 1, 10, 2, 8];
    assert.deepEqual(InsertionSort(testArray), [1, 2, 5, 7, 8, 10]);
  });

  it('should sort an array of words using the insertion sort method', () => {
    let testArray = [ 'xylophone', 'cat', 'potato', 'dog', 'pizza' ];
    assert.deepEqual(InsertionSort(testArray), [ 'cat', 'dog', 'pizza', 'potato', 'xylophone' ]);
  });

  it('should sort an array of negative numbers using the insertion sort method', () => {
    let testArray = [ 6, -15, -3, -9, -1, -11, 0 ];
    assert.deepEqual(InsertionSort(testArray), [-15, -11, -9, -3, -1, 0, 6]);
  });

});
