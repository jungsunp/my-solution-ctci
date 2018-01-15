

// https://leetcode.com/problems/climbing-stairs/description/
// Similar to CTCI - 8.1

/**
 * @param {number} n
 * @return {number}
 */
// Solution - Memo
const climbStairsMemo = (step, memo) => {
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
// Run: O(n)
// Space: O(n)

// Solution - DP
//   basicially fibonacci
const climbStairsDP = (step) => {
  if (step === 1) return 1;
  if (step === 2) return 2;

  let first = 1;
  let second = 2;
  for (let i = 3; i <= step; i++) {
      const third = first + second;
      first = second;
      second = third;
  }
  return second;
};
// Run: O(n)
// Space: O(1)

// There are more optimized O(log n) run time solutions (ex. using Fibonnaci formula)
