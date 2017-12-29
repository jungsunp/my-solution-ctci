

// https://leetcode.com/problems/permutations/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length < 2) return [nums];

  const prevPermArr = permute(nums.slice(1));
  const num = nums[0];
  const retArr = [];

  prevPermArr.forEach(prevPerm => {
    for (let i = 0; i <= prevPerm.length; i++) {
      const newPerm = prevPerm.slice();
      newPerm.splice(i, 0, num);
      retArr.push(newPerm);
    }
  });

  return retArr;
};

// Run: O(n!)
// Space: O(n!)
