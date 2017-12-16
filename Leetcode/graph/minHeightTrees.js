

// https://leetcode.com/problems/minimum-height-trees/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

 // Topological sort - BFS
var findMinHeightTrees = function(n, edges) {
  if (!n) return [];
  if (n === 1) return [0];
  const graph = Array(n).fill(0).map(() => []);
  const indegrees = Array(n).fill(0);

  edges.forEach(([vert1, vert2]) => {
      graph[vert1].push(vert2);
      graph[vert2].push(vert1);
      indegrees[vert1]++;
      indegrees[vert2]++;
  });

  let minDegrees = [];
  indegrees.forEach((indegree, vertex) => {
      if (indegree === 1) minDegrees.push(vertex);
  });

  while (n > 2) {
      const tmpMinDegrees = [];
      minDegrees.forEach(leave => {
          graph[leave].forEach(vert => {
              if (--indegrees[vert] === 1) tmpMinDegrees.push(vert);
          })
      })
      n -= minDegrees.length;
      minDegrees = tmpMinDegrees;
  }

  return minDegrees;
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
console.log(findMinHeightTrees(0, []));
console.log(findMinHeightTrees(4, [[1, 0], [2, 3]]));
console.log(findMinHeightTrees(3, [[1, 0], [2, 1]]));
console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
console.log(findMinHeightTrees(6, [[0, 1], [0, 2], [0, 3], [3, 4], [4, 5]]));
