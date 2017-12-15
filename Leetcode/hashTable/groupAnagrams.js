

// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const hashMap = new Map();
  const retArr = [];

  strs.forEach(str => {
    const key = str.split('').sort().join('');
    if (!hashMap.has(key)) hashMap.set(key, [str]);
    else hashMap.get(key).push(str);
  });

  hashMap.forEach(val => retArr.push(val));
  return retArr;
};
// run: O(n * k log k)
//    n: length of strs
//    k: max legnth of str
// space: O(n * k)
