const inputArr: number[] = [-10, 11, 7, -2, 0];
const arr: number[] = [...inputArr];

const swap = (arr: number[], i: number, j: number) => {
  let temp = arr[i];
  arr[i] = arr[j]!;
  arr[j] = temp!;
};

const getSmallerPivots = (
  arr: number[],
  pivot: number,
  start: number,
  end: number
): number => {
  // Count smaller pivots
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (arr[i]! < pivot) count++;
  }

  return count;
};

const partition = (
  arr: number[],
  start: number,
  pivotIndex: number,
  end: number
) => {
  // Pointers for partition
  let left = start;
  let right = pivotIndex + 1;

  // Possible cases
  while (left < pivotIndex && right <= end) {
    const leftEle = arr[left]!;
    const rightEle = arr[right]!;
    const pivot = arr[pivotIndex]!;

    // Case 1: Left is correct (<), Right is misplaced (<)
    if (leftEle < pivot && rightEle < pivot) {
      left++;
    }
    // Case 2: Left is misplaced (>=), Right is correct (>=)
    else if (leftEle >= pivot && rightEle >= pivot) {
      right++;
    }
    // Case 3: Both are correct
    else if (leftEle < pivot && rightEle >= pivot) {
      left++;
      right++;
    }
    // Case 4: Both are misplaced (Left is too big, Right is too small) -> SWAP
    else {
      swap(arr, left, right);
      left++;
      right++;
    }
  }
};

const quickSort = (arr: number[], start: number, end: number): void => {
  // Base case
  if (start >= end) return;

  // Pick a pivot
  const mid = Math.floor((start + end) / 2);
  const pivot = arr[mid]!;

  // Insert current pivot at correct position
  const pivotIndex = start + getSmallerPivots(arr, pivot, start, end);
  swap(arr, pivotIndex, mid);

  // Partition: leftElements <= pivot && rightElements >= pivot
  partition(arr, start, pivotIndex, end);

  // Recursive calls
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
};

quickSort(arr, 0, arr.length - 1);
console.log(`
    Original Array: ${inputArr}
    Sorted Array: ${arr}
    `);
