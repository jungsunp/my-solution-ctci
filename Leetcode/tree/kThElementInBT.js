
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// DFS - iterative
var kthSmallest = function (root, k) {
    const nodeStack = [];
    let node = root;
    while (node || nodeStack.length > 0) {
        while (node) {
            nodeStack.push(node);
            node = node.left;
        }
        node = nodeStack.pop();
        if (--k === 0) break;
        node = node.right;
    }
    return node.val;
};
