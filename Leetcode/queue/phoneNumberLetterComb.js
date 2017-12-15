

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

const telephone = {
  1: ['*'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: []
};

// Using recursion
// var letterCombinations = function(digits) {
//   if (digits.length < 1) return [];
//   if (digits.length === 1) return telephone[digits[0]];

//   const retArr = [];
//   const prevComb = letterCombinations(digits.slice(1));
//   telephone[digits[0]].forEach(letter => {
//       prevComb.forEach(comb => {
//           retArr.push(letter + comb);
//       });
//   });
//   return retArr;
// };
// Run : O(3^n)
// Space : O(3^n)


// Using FIFO queue
var letterCombinations = function(digits) {
  if (digits.length < 1) return [];

  let retArr = telephone[digits[0]].slice();
  for (let i = 1; i < digits.length; i++) {
    const tmpArr = [];
    while (retArr.length > 0) {
      const comb = retArr.shift();
      telephone[digits[i]].forEach(char => {
        tmpArr.push(comb + char);
      });
    }
    retArr = tmpArr;
  }
  return retArr;
};
// Run : O(3^n)
// Space : O(3^n)
