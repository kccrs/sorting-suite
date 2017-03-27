function BubbleSort(arr) {
  do {
    var swapped = false;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        var current = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = current;
        swapped = true;
      }
    }
  }
  while(swapped === true)
  return arr;
}

module.exports = BubbleSort;
