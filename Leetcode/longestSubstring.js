

// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


// Solution - faster for some reason..
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = '';
  let retStr = '';
  for (let i = 0; i < s.length; i++){
      const index = str.indexOf(s[i]);
      if (index > -1) str = str.slice(index + 1);
      str += s[i];
      if (retStr.length < str.length) retStr = str;
  }
  return retStr.length;
};
// Run time: O(n^2)
// Space: O(min(m, n))
//         n: size of the string
//         m: size of the charset/alphabet

// Solution - Sliding window approach
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const hashMap = new Map();
  let ret = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++){
      if (hashMap.has(s[right])) {
          left = Math.max(left, hashMap.get(s[right]) + 1);
      }
      hashMap.set(s[right], right);
      ret = Math.max(ret, right - left + 1);
  }
  return ret;
};
// Run time: O(n)
// Space: O(min(m, n))
//         n: size of the string
//         m: size of the charset/alphabet
