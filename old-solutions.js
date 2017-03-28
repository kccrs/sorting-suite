

function InsertionSort(arr) {
  let testArray = [7, 5, 1, 10, 2, 8];
  // starting at index 1 because there is nothing to compare at index 0
  for(var i = 1; i < arr.length; i++) {
    // sets the item we are currently checking in the array to 'current'
    var current = arr[i];
    // set j to the index previous to the current index
    // if j is greater than or equal to 0 (indices cannot be negative) AND the previous index value is greater than the current index value, decrease j by 1 each time.

    for(var j = i - 1; j >= 0 && arr[j] > current; j--) {
      // example current = arr[1] or 5
      // arr[j] = arr[0] or 7
      // 7 is greater than 5
      // arr[0+1] which is arr[1] now becomes arr[0];
      // therefore 5 takes the place of 7 in the array
      arr[j+1] = arr[j];
    }
    // item at previous index is now set to current arr[i] and the process repeats through the end of the original array
    arr[j+1] = current;
  }
  return arr;

}

module.exports = InsertionSort;

// var length = arr.length;
// for (var i = 0; i < length; i++) {
//   var temp = arr.shift();
//   console.log(temp, arr);
// }
// return arr;
