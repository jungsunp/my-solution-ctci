
const BST = require('./utils/BST');

// Solution
const insertBalanced = arr => {
  const midIndex = Math.floor(arr.length / 2);
  const tree = new BST(arr[midIndex]);
  if (midIndex > 0) {
    tree.left = insertBalanced(arr.slice(0, midIndex));
  }
  if (midIndex < arr.length-1) {
    tree.right = insertBalanced(arr.slice(midIndex + 1));
  }
  return tree;
};

// Test
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printLevelOrder();
