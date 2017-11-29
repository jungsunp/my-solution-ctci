
const BST = require('./utils/BST');

// Solution - recursive
// const treeHeight = tree => {
//   if (!tree) return 0;
//   if (!tree.left && !tree.right) return 1;
//   return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
// };

// const checkBalanced = tree => {
//   if (!tree) return false;
//   if (!tree.left && !tree.right) return true;
//   if (Math.abs(treeHeight(tree.left) - treeHeight(tree.right)) > 1) {
//     return false;
//   } else {
//     if (tree.left) {
//       if (!checkBalanced(tree.left)) return false;
//     }
//     if (tree.right) {
//       if (!checkBalanced(tree.right)) return false;
//     }
//   }
//   return true;
// };
// run time: O(n log n)
// space complexity: O(log n)

// Solution - recursive (optimized)
const treeHeight = tree => {
  if (!tree) return 0;

  const leftHeight = treeHeight(tree.left);
  if (leftHeight === Infinity) return Infinity; // use Infinity as error code

  const rightHeight = treeHeight(tree.right);
  if (rightHeight === Infinity) return Infinity; // use Infinity as error code

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return Infinity;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
};

const checkBalanced = tree => {
  return treeHeight(tree) !== Infinity;
};
// run time: O(n)
// space complexity: O(log n)

// Test

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);
