

// https://leetcode.com/problems/search-for-a-range/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  if (nums.length < 2) return nums[0] === target ? [0, 0] : [-1, -1];
  let left= 0;
let right = nums.length - 1;
let mid;
let found = false;

while (left <= right && !found) {
  mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) {
          found = true;
      } else if (nums[mid] > target) {
          right = mid -1;
      } else {
          left = mid +1;
      }
  }

  if (!found) return [-1,-1];
  left = mid - 1;
  right = mid + 1;
  while (nums[left] === target) {
      left--;
  }
  while (nums[right] === target) {
      right++;
  }
  return [left+1, right-1];
};
// Run: O(log n)
// Space: O(1)
