

// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const retArr = [[root.val]];
  let stackArr = [root];
  while (stackArr.length > 0) {
      const tmpStack = [];
      stackArr.forEach(node => {
          if (node.left) tmpStack.push(node.left);
          if (node.right) tmpStack.push(node.right);
      })
      if (tmpStack.length > 0) retArr.push(tmpStack.map(node => node.val));
      stackArr = tmpStack;
  }
  return retArr;
};
