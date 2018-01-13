

/*
Find and return the first duplicate integer in an array in O(n) time and O(1) space. Assume there will always be at least one duplicated integer in the array.

All the integers in the array would have a value between 1 and n-1 where n is the length of the list
*/

const dupInt = arr => {
  for (let i = 0; i < arr.length; i++) {
    const index = Math.abs(arr[i]);
    if (arr[index] > 0) arr[index] = -arr[index];
    else return index;
  }

};
// Run: O(n)
// Space: O(1)

console.log(dupInt([1,1,2]));
console.log(dupInt([2,1,3,1]));
console.log(dupInt([2,1,4,3,5,4]));
