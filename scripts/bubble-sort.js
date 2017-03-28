let BubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let current = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = current;
      }
    }
  }
  return arr;
}

module.exports = BubbleSort;

// function BubbleSort(arr) {
//   do {
//     var swapped = false;
//     for(var i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var current = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = current;
//         swapped = true;
//       }
//     }
//   }
//   while(swapped === true)
//   return arr;
// }
