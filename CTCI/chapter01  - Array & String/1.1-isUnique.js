
// uses hash table
// const isUnique = str => {
//   const charTable = {};
//   for (let i = 0; i < str.length; i++) {
//     if (charTable[str[i]] === 1) {
//       return false;
//     } else {
//       charTable[str[i]] = 1;
//     }
//   }
//   return true;
// };
// run time: O(n)
// space complexity: O(n)

// without any other DS
const isUnique = str => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.slice(i+1).indexOf(str[i]) > -1) return false;
  }
  return true;
};
// run time: O(n^2)
// space complexity: O(1)

console.log(isUnique('abc')); // true
console.log(isUnique('aabc')); // false
console.log(isUnique('abcdefghi')); // true
console.log(isUnique('abcdeefghi')); //false
