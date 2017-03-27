var assert = require('chai').assert;
var InsertionSort = require('../scripts/insertion-sort');

describe('insertion sort', () => {
  it('should sort an array using the insertion sort method', () => {
    let testArray = [7, 5, 1, 10, 2, 8];
    assert.deepEqual(InsertionSort(testArray), [1, 2, 5, 7, 8, 10]);
  });
});
