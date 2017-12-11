

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

// Solution ES6
const flattenArr = arr => arr.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

console.log(flattenArr([]));
console.log(flattenArr([1,2,3,4]));
console.log(flattenArr([1,[2,3],4]));
console.log(flattenArr([1,2,[3,[4,5,[6]]],7]));
console.log(flattenArr([1,2,[3,[4,5,[6]],[7,8]],9]));
console.log(flattenArr([[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]));
