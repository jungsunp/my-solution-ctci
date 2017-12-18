

// https://leetcode.com/problems/reverse-integer/description/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x = -x;
  }

  let ret = 0;
  while (x > 0){
    const digit = x % 10;
    ret = ret * 10 + digit;
    x = Math.floor(x / 10);
  }
  return isNegative ? -ret : ret;
};
