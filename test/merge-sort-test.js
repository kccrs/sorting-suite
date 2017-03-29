var assert = require('chai').assert;
var MergeSort = require('../scripts/merge-sort');

describe('merge sort', () => {

  it('should return a correctly sorted array when merge sort is called on an array of even length', () => {
    let testArray = [8, 47, 11, 6, 16, 30];
    assert.deepEqual(MergeSort(testArray), [6, 8, 11, 16, 30, 47])
  });

  it('should return a correctly sorted array when merge sort is called on an array of odd length', () => {
    let testArray = [8, 47, 11, 6, 16, 2, 30];
    assert.deepEqual(MergeSort(testArray), [2, 6, 8, 11, 16, 30, 47])
  });

});
