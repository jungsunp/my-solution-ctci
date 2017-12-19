

// https://leetcode.com/problems/binary-tree-inorder-traversal/description/


// Iterative solution
const inorderTraversal = root => {
    const retArr = [];
    const nodeStack = [];
    let node = root;
    while (node || nodeStack.length) {
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
