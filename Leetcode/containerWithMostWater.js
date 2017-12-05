

// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length -1;
  let max = 0;

  while (left < right) {
    let volume = Math.min(height[left], height[right]);
    volume *= (right - left);
    if (max < volume) {
      max = volume;
    }
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
};
// Run: O(n)
// Space: O(1)
