

// https://leetcode.com/problems/unique-paths/description/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// DP solution
var uniquePathsDP = function(m, n) {
  if (m < 1 || n < 1) return 0;
  const path = Array(m).fill(0).map(() => Array(n).fill(1));

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      path[row][col] = path[row - 1][col] + path[row][col - 1];
    }
  }

  return path[m - 1][n - 1];
};
// Run: O(m * n)
// Space: O(m * n) -> this can be further optimized. but I coudln't understand...

// Combinatorics Solution
var uniquePathsCB = function(m, n) {
  if (m > n) return uniquePaths(n, m);
  let ret = 1;
  for (let i = 1; i < m; i++) { // calculate (m+n-2) choose (m-1)
    ret *= (n + i - 1) / i;
  }
  return ret;
};
// Run: O(min(m, n));
// Space: O(1);
