let MergeSort = (arr) => {
  // let testArray = [8, 47, 11, 6, 16, 30];

  // First divide the list into the smallest unit (1 element), then compare each element with the adjacent list to sort and merge the two adjacent lists. Finally all the elements are sorted and merged.

  var singleItemArrays = [];
  while (arr.length > 0) {
    singleItemArrays.push(arr.splice(0, 1));
    console.log('single arrays ', singleItemArrays, 'old array: ', arr);
  }

  // take first two items sort into new array
  // repeat that for all additional items so there are x number of arrays of 2
  // if there is one single left add it to the last array so that one has therefore
  // then compare the first two arrays and sort the zero index of each into a combined array until each original array's length is zero
  // do the same for the next two and so on.
  //


  return arr;
};

module.exports = MergeSort;
