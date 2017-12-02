

// Solution
// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) return '';
  let prefix = strs[0];
  let index = 1;
  while (prefix.length > 0 && index < strs.length) {
    let tmpStr = '';
    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] !== strs[index][i]) break;
      tmpStr += prefix[i];
    }
    prefix = tmpStr;
    index++;
  }
  return prefix;
};
// Run: O(S) - S being sum of all characters
// Space: O(1)
