const MergeSort = (arr) => {
  // let testArray = [8, 47, 11, 6, 16, 30];
  // let testArray = [3, 99, 11, 6, 19, 2, 34];

  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  let leftSide = arr.slice(0, middle);
  let mergeLeft = MergeSort(leftSide);

  
  let rightSide = arr.slice(middle);
  let mergeRight = MergeSort(rightSide);
  return mergeIt(mergeLeft, mergeRight);
};

const mergeIt = (left, right) => {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return sortedArray.concat(left.length ? left : right);

};

module.exports = MergeSort;
