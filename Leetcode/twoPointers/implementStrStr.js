

// https://leetcode.com/problems/implement-strstr/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle === '') return 0;
  let left = 0;
  let right;
  const needleLen = needle.length;
  while (left <= haystack.length - needleLen) {
    right = 0;
    while (right < needleLen) {
      if (haystack[left + right] !== needle[right]) break;
      if (right === needleLen - 1) return left;
      right++;
    }
    left++;
  }
  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('a', ''));
console.log(strStr('mississippi', 'issip'));
