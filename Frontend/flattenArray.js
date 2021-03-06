

// Solution - recursion
// const flattenArr = arr => {
//   let retArr = [];
//   arr.forEach(elem => {
//     if (Array.isArray(elem)) {
//       retArr = retArr.concat(flattenArr(elem));
//     } else {
// 	    retArr.push(elem);
//     }
//   });
//   return retArr;
// };
// Run: O(n)
// Space: O(n)

// Solution ES6
// const flattenArr = arr => arr.reduce(
//   (a, b) => a.concat(Array.isArray(b) ? flattenArr(b) : b),
//   []
// );

// itertative solution
const flattenArr = arr => {
  let index = 0;
  while (index < arr.length) {
    if (Array.isArray(arr[index])) {
      arr.splice(index, 1, ...arr[index]);
    } else {
      index++;
    }
  }
  return arr;
};

console.log(flattenArr([]));
console.log(flattenArr([1, 2, 3, 4]));
console.log(flattenArr([1, [2, 3], 4]));
console.log(flattenArr([1, 2, [3, [4, 5, [6]]], 7]));
console.log(flattenArr([1, 2, [3, [4, 5, [6]], [7, 8]], 9]));
console.log(flattenArr([[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]));
