

// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length < 1) return 0;
  let index = 0;
  let curSum = 0;
  let max = nums[0];

  while (index < nums.length) {
    curSum += nums[index];
    if (curSum > max) max = curSum;
    if (curSum <= 0) curSum = 0;
    index++;
  }

  return max;
};
// Run: O(n)
// Space: O(1)
