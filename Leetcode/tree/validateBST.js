

// https://leetcode.com/problems/validate-binary-search-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.left) {
      if (root.val <= root.left.val) return false;
      if (root.left.val <= min) return false;
  }
  if (root.right) {
      if (root.val >= root.right.val) return false;
      if (root.right.val >= max) return false;
  }
  if (root.left && root.right) {
      if (root.left.val >= root.right.val) return false;
  }
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
