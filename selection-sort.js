const arr = [7, 12, 9, 11, 3];
const n = arr.length;

// normal sort
// for (let i = 0; i < n - 1; i++) {
//   let min_index = i;
//   for (let j = i + 1; j < n; j++) {
//     if (arr[j] < arr[min_index]) {
//       min_index = j;
//     }
//   }

//   if (min_index !== i) {
//     const temp = arr[min_index];
//     arr[min_index] = arr[i];
//     arr[i] = temp;
//   }
// }

// console.log(arr);

// recursive sort
function selectionSort(arr, n) {
  outerFunction(arr, n);
}

function outerFunction(arr, n) {
  if (n === 1) return;

  const max_index = innerFunction(arr, n);

  if (max_index !== -1) {
    swapElement(arr, max_index, n - 1);
  }
  outerFunction(arr, n - 1);
}

function innerFunction(arr, n, max_index = 0) {
  if (n === 0) return max_index;

  if (arr[max_index] < arr[n - 1]) {
    max_index = n - 1;
  }

  return innerFunction(arr, n - 1, max_index);
}

function swapElement(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

selectionSort(arr, n);

console.log(arr);
