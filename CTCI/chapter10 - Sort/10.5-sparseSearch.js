

// Solution
const sparseSearch = (arr, target, left = 0, right) => {
  if (!arr) return;
  if (!right) right = arr.length - 1;
  if (left > right) return -1; // not found

  const mid = Math.floor((left + right) / 2);
  let shiftMid = mid;
  while (arr[shiftMid] === '' && shiftMid > 0) {
    shiftMid--;
  }
  if (arr[shiftMid] === target) return shiftMid;
  if (arr[shiftMid] > target && arr[shiftMid] !== '') return sparseSearch(arr, target, left, shiftMid - 1);
  else return sparseSearch(arr, target, mid + 1, right);

};
// Run Time: O(n) - if there are many empty strings

/* TEST */
console.log(sparseSearch() === undefined);
console.log(sparseSearch(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball') === 4);
console.log(sparseSearch(['', '', '', '', '', '', '', '', '', ''], 'ball') === -1);
console.log(sparseSearch(['', '', '', '', '', '', '', '', '', '', '', 'hello'], 'hello') === 11);
