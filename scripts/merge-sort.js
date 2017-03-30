const MergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  // let leftSide = arr.slice(0, middle);
  // let mergeLeft = MergeSort(leftSide);
  // ^^ above is refactored into below
  // let mergeLeft = MergeSort(arr.slice(0, middle));
  // let rightSide = arr.slice(middle);
  // let mergeRight = MergeSort(rightSide);
  // ^^ above is refactored into below
  // let mergeRight = MergeSort(arr.slice(middle));

  // return mergeIt(mergeLeft, mergeRight);
  return mergeIt(MergeSort(arr.slice(0, middle)), MergeSort(arr.slice(middle)));
};

const mergeIt = (left, right) => {
  let sortedArray = [];

  while (left.length && right.length) {
    sortedArray.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
  return sortedArray.concat(left.length ? left : right);
};

module.exports = MergeSort;
