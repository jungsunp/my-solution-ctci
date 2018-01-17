

// https://leetcode.com/problems/count-and-say/description/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n <= 1) return '1';

  let retStr = '';
  const prevStr = countAndSay(n - 1);
  let index = 0;
  while (index < prevStr.length) {
    let count = 1;
    while (prevStr[index] === prevStr[index + 1]) {
      count++;
      index++;
    }
    retStr += count + prevStr[index];
    index++;
  }
  return retStr;
};
// Run: O(n ^ 2) (?)
// Space: O(n)
