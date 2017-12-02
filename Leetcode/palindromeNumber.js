

// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let numDig = 1;
  while (Math.floor(x / Math.pow(10, numDig)) !== 0) {
      numDig++;
  }
  for (let i = 0; i <= Math.floor(numDig/2); i++) {
      const left = Math.floor(x / Math.pow(10, numDig - i - 1)) % 10;
      const right = Math.floor(x / Math.pow(10, i)) % 10;
      if (left !== right) return false;
  }
  return true;
};
