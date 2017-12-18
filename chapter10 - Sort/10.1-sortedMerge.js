

// Solution
const sortedMerge = (arr1, arr2) => {
  if (!arr1 || !arr2) return;
  let index1 = arr1.length - 1;
  let index2 = arr2.length - 1;
  let mergeIndex = index1 + index2 + 1;
  arr1 = arr1.concat(Array(arr2.length)); // manually set buffer

  while (index2 >= 0) {
    if (index1 >= 0 && arr1[index1] > arr2[index2]) {
      arr1[mergeIndex] = arr1[index1--];
    } else {
      arr1[mergeIndex] = arr2[index2--];
    }
    mergeIndex--;
  }

  return arr1;
};
// Run: O(m + n)
// Space:

// Test
// sortedMerge is callable
console.log(sortedMerge() === undefined);

// sortedMerge merges in order
console.log(JSON.stringify(sortedMerge([0, 2, 4], [1, 3, 5])) === JSON.stringify([0, 1, 2, 3, 4, 5]));

// sortedMerges sorted arrays
console.log(JSON.stringify(sortedMerge([0, 1, 2], [3, 4, 5, 6])) === JSON.stringify([0, 1, 2, 3, 4, 5]));

// sortedMerge merges empty arrays
console.log(JSON.stringify(sortedMerge([0, 1, 2], [])) === JSON.stringify([0, 1, 2]));
