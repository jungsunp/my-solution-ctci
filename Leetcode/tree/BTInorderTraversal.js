

// https://leetcode.com/problems/binary-tree-inorder-traversal/description/


// Iterative solution
const inorderTraversal = root => {
  if (!root) return [];
  const retArr = [];
  const nodeStack = [];
  let node = root;
  while (node || nodeStack.length > 0) {
      while (node) {
          nodeStack.push(node);
          node = node.left;
      }
      node = nodeStack.pop();
      retArr.push(node.val);
      node = node.right;
  }
  return retArr;
};
