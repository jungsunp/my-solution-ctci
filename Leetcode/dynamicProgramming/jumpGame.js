

// https://leetcode.com/problems/jump-game/description/

// Solution - Not fully optimized
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJumpMemo = (nums, memo) => {
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

// Solution - Fully optimized
//  Difficult to come up with this approach during interview
//  recursion -> memoization -> bottom to top -> greedy
const canJump = (nums) => {
	if (!nums || nums.length < 2) return true;
  let lastPos = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= lastPos) lastPos = i;
  }

  return lastPos === 0;
}
