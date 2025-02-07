const arr = [7, 12, 9, 11, 3];
const n = arr.length;

// normal sort
// for (let i = 0; i < n; i++) {
//   let is_not_swaped = true;

//   for (let j = 0; j < n - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       const temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;

//       is_not_swaped = false;
//     }
//   }

//   if (is_not_swaped) {
//     break;
//   }
// }

// console.log(arr);

// recursive sort
function bubbleSort(arr, n) {
  outerFunction(arr, n);
}

function outerFunction(arr, n) {
  if (n === 0) return;

  const is_not_swaped = innerFunction(arr, 0, n);

  if (is_not_swaped) return;

  outerFunction(arr, n - 1);
}

function innerFunction(arr, i, n, is_not_swaped = true) {
  if (i === n - 1) return is_not_swaped;

  if (arr[i] > arr[i + 1]) {
    swapElement(arr, i);
    is_not_swaped = false;
  }

  return innerFunction(arr, i + 1, n, is_not_swaped);
}

function swapElement(arr, i) {
  const temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
}

bubbleSort(arr, n);

console.log(arr);
