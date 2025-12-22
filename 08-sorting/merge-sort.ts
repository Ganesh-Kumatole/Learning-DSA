const inputArr: number[] = [12, 9, -2, 1, 5, -10, 5];
const arr: number[] = [...inputArr];

function merge(arr: number[], start: number, mid: number, end: number): void {
  // Define TemporaryArr to store merge result
  const temp: number[] = [];

  let i = start;
  let j = mid + 1;

  // Merging sorted arrays using 2-pointers
  while (i <= mid && j <= end) {
    if (arr[i]! <= arr[j]!) {
      temp.push(arr[i]!);
      i++;
    } else {
      temp.push(arr[j]!);
      j++;
    }
  }

  // Copying remaining elements when one subArr exhausted
  if (i > mid) {
    while (j <= end) {
      temp.push(arr[j]!);
      j++;
    }
  } else if (j > end) {
    while (i <= mid) {
      temp.push(arr[i]!);
      i++;
    }
  }

  // Mutating Array for next call
  for (let k = 0; k < temp.length; k++) {
    arr[start + k] = temp[k]!;
  }
}

function mergeSort(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): void {
  // Base case
  if (start >= end) return;

  // Otherwise...

  const mid: number = Math.floor((start + end) / 2);

  // 01. Divide into sub-arrays
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  // 02. Merge sorted sub-arrays
  merge(arr, start, mid, end);
}

mergeSort(arr);
console.log(`
  Original Array: ${inputArr}
  Sorted Array: ${arr}
  `);
