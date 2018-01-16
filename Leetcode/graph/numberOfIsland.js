

// https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {character[][]} grid
 * @return {number}
 */

// Solution - DFS
const numIslands = grid => {
  if (!grid || grid.length < 1) return 0;
  const row = grid.length;
  const col = grid[0].length;
  let num = 0;

  const checkNeighbor = (nodeRow, nodeCol, nodeStack) => {
      if (nodeRow < 0 || nodeCol < 0) return;
      if (nodeRow >= row || nodeCol >= col) return;
      if (grid[nodeRow][nodeCol] === '0') return;
      grid[nodeRow][nodeCol] = '0';
      nodeStack.push(nodeRow * col + nodeCol);
  };

  for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
          if (grid[i][j] === '0') continue;
          grid[i][j] = '0';
          num++;
          const nodeStack = [ i * col + j ];
          while (nodeStack.length) {
              const node = nodeStack.pop();
              const nodeRow = Math.floor(node / col);
              const nodeCol = node % col;
              checkNeighbor(nodeRow - 1, nodeCol, nodeStack);
              checkNeighbor(nodeRow, nodeCol - 1, nodeStack);
              checkNeighbor(nodeRow + 1, nodeCol, nodeStack);
              checkNeighbor(nodeRow, nodeCol + 1, nodeStack);
          }
      }
  }

  return num;

};
// Run: O(M * N)
// Space: O(Min(M, N)) or O(M * N) ???

// There is also DFS and Union Find Solution
