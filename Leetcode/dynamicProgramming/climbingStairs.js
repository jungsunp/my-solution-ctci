

// https://leetcode.com/problems/climbing-stairs/description/
 // Similar to CTCI - 8.1

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (step, memo) => {
  if (!memo) memo = new Map();

  if (step < 0) return 0;
  else if (step === 0) return 1;
  else {
      if (memo.has(step)) return memo.get(step);
      const numWays = climbStairs(step - 1, memo) + climbStairs(step - 2, memo);
      memo.set(step, numWays);
      return numWays;
  }
};
