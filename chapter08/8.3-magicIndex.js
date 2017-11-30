

// Solution - if integers are distinct
// const magicIndex = (arr, start, end) => {

// 	if (start === undefined) start = 0;
//   if (end === undefined) end = arr.length - 1;
//   if (start > end) return;

//   const mid = Math.floor((start + end) / 2);
//   if (arr[mid] === mid) return mid;
//   if (arr[mid] > mid) return magicIndex(arr, start, mid - 1);
//   return magicIndex(arr, mid + 1, end);
// };
// Run: O(log n)
// Space: O(n) ?


// Solution - if integers are NOT distinct
const magicIndex = (arr, start, end) => {

    if (start === undefined) start = 0;
    if (end === undefined) end = arr.length - 1;
    if (start > end) return;

    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) return mid;
    let retIndex;
    retIndex = magicIndex(arr, start, Math.min(mid - 1, arr[mid])); // left side first
    if (retIndex >= 0) return retIndex;
    return magicIndex(arr, mid + 1, Math.max(mid + 1, arr[mid])); // right side after
  };



/* TEST */
console.log(magicIndex([-1, 0, 1, 3, 9, 100]), 3);
console.log(magicIndex([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(magicIndex([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct
