

// https://leetcode.com/problems/jump-game/description/

// Solution - Not fully optimized
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums, memo) => {
  if (!memo) memo = new Map();
  if (nums.length < 1) return false;
  if (nums.length === 1) return true;

  let maxJump = nums[0];
  if (maxJump >= nums.length - 1) return true;
  while (maxJump > 0) {
    let nextJump;
    const nextNums = nums.slice(maxJump);
    if (memo.has(nextNums)) nextJump = memo.get(nextNums);
    else nextJump = canJump(nextNums, memo);
    if (nextJump) return true;
    maxJump--;
  }
  return false;
};
