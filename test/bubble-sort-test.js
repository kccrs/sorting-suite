var assert = require('chai').assert;
var BubbleSort = require('../scripts/bubble-sort');

describe('bubble-sort', () => {

  it('should sort an array using the bubble-sort method', () => {
    let testArray = [ 6, 15, 3, 9, 1, 11, 0 ];
    assert.deepEqual(BubbleSort(testArray), [ 0, 1, 3, 6, 9, 11, 15 ]);
  });

  it('should sort an array using the bubble-sort method', () => {
    let testArray = [ 'xylophone', 'cat', 'potato', 'dog', 'pizza' ];
    assert.deepEqual(BubbleSort(testArray), [ 'cat', 'dog', 'pizza', 'potato', 'xylophone' ]);
  });

});
