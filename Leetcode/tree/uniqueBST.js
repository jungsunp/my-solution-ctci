

//https://leetcode.com/problems/unique-binary-search-trees/description/

// G(n): number of BST with 1...n
// F(i, n): number of BST with 1...n and root as i
// F(i, n) = G(i-1) * G(n-i)	1 <= i <= n
// G(n) = G(0) * G(n-1) + G(1) * G(n-2) + … + G(n-1) * G(0)

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const G = Array(n+1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; i++){
      for (let j = 0; j < i; j++) {
          G[i] += G[j] * G[i - j - 1];
      }
  }

  return G[n];
};
