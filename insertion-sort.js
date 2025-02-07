const arr = [7, 12, 9, 11, 3];
const n = arr.length;

// normal sort
// for (let i = 1; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     if (arr[i] < arr[j]) {
//       const temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }
//   }
// }

// console.log(arr);

function insertionSort(arr, n) {
  outerFunction(arr, n, n - 2);
}

function outerFunction(arr, n, i) {
  if (i < 0) return;

  innerFunction(arr, i, n - 1);
  outerFunction(arr, n, i - 1);
}

function innerFunction(arr, i, j) {
  if (i == j) return;

  if (arr[i] > arr[j]) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  innerFunction(arr, i, j - 1);
}

insertionSort(arr, n);

console.log(arr);
