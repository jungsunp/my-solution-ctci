
// https://leetcode.com/problems/subsets/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums, index) => {
  if (index === undefined) index = nums.length - 1;
  if (index < 0) return [[]];

  const retArr = [];
  const prevSubsets = subsets(nums, index - 1);
  const curNum = nums[index];
  prevSubsets.forEach(subset => {
      const newSubset = subset.slice(0);
      newSubset.push(curNum);
      retArr.push(subset);
      retArr.push(newSubset);
  });

  return retArr;
};
// Run: O(2^n)
// Space: O(2^n)
