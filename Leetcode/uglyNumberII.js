
// https://leetcode.com/problems/ugly-number-ii/description/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const arr = [1];
  let factor2 = 2, factor3 = 3, factor5=5;
  let index2 = 0, index3 = 0, index5 = 0;
  for (let i = 1; i < n; i++) {
      const num = Math.min(factor2, factor3, factor5);
      arr.push(num);
      if (num === factor2) {
          factor2 = 2 * arr[++index2];
      }
      if (num === factor3) {
          factor3 = 3 * arr[++index3];
      }
      if (num === factor5) {
          factor5 = 5 * arr[++index5];
      }
  }
  return arr[n-1];
};
// Run: O(n)
// Space: O(1)

console.log(nthUglyNumber(100));
