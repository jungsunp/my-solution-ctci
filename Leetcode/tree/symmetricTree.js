

// https://leetcode.com/problems/symmetric-tree/description/

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

 // Solution - BFS (Iterative)
const isSymmetricBFS = root => {
  if (!root) return true;
  let leftArr = [root.left];
  let rightArr = [root.right];
  let allNull = (root.left === null) && (root.right === null);

  while(!allNull) {
      allNull = true;
      const tmpLeftArr = [];
      const tmpRightArr = [];

      for (let i = 0; i < leftArr.length; i++){
          const j = rightArr.length - i - 1;
          const leftVal = leftArr[i] ? leftArr[i].val : null;
          const rightVal = rightArr[j] ? rightArr[j].val : null;
          if (leftVal !== rightVal) return false;

          if (leftVal !== null) allNull = false;
          else continue;

          tmpLeftArr.push(leftArr[i].left, leftArr[i].right);
          tmpRightArr.unshift(rightArr[j].left, rightArr[j].right);
      }

      leftArr = tmpLeftArr;
      rightArr = tmpRightArr;
  }

  return true;
};

// Solution - DFS (Recursive)
const symmetricHelper = (lNode, rNode) => {
  if (!lNode || !rNode) return lNode === rNode;
  if (lNode.val !== rNode.val) return false;
  return symmetricHelper(lNode.left, rNode.right) && symmetricHelper(lNode.right, rNode.left);
};

const isSymmetric = function (root) {
  if (!root) return true;
  return symmetricHelper(root.left, root.right);
};
