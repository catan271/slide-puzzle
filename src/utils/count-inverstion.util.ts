import { cloneDeep } from 'lodash';

function mergeAndCount(arr: Array<number>, l: number, m: number, r: number) {
  const left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }
  const right = [];
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }

  let i = 0;
  let j = 0;
  let k = l;
  let swaps = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      swaps += m + 1 - (l + i);
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
  return swaps;
}

// Merge sort function
const mergeSortAndCount = (arr: Array<number>, l: number, r: number) => {
  let count = 0;
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    count += mergeSortAndCount(arr, l, m);
    count += mergeSortAndCount(arr, m + 1, r);
    count += mergeAndCount(arr, l, m, r);
  }
  return count;
};

export const countInversions = (arr: Array<number>) => {
  return mergeSortAndCount(cloneDeep(arr), 0, arr.length - 1);
};
