

// https://leetcode.com/problems/same-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// BFS (non-recursive)
//  recursive is simpler to implement..
const isSameTreeBFS = (p, q) => {
    if (p === null) return (q === null);
    if (q === null) return (p === null);
    if (p.val !== q.val) return false;
    let pArr = [p];
    let qArr = [q];

    while (pArr.length > 0) {
        if (pArr.length !== qArr.length) return false;
        const pTmpArr = [];
        const qTmpArr = [];

        for (let i = 0; i < pArr.length; i++) {
            if (pArr[i].left && qArr[i].left) {
                if (pArr[i].left.val !== qArr[i].left.val) return false;
                pTmpArr.push(pArr[i].left);
                qTmpArr.push(qArr[i].left);
            } else {
                if (pArr[i].left !== null || qArr[i].left !== null) return false;
            }
            if (pArr[i].right && qArr[i].right) {
                if (pArr[i].right.val !== qArr[i].right.val) return false;
                pTmpArr.push(pArr[i].right);
                qTmpArr.push(qArr[i].right);
            } else {
                if (pArr[i].right !== null || qArr[i].right !== null) return false;
            }
        }

        pArr = pTmpArr;
        qArr = qTmpArr;
    }


    return true;
};
// Run: O(n)
// Space: O(k) - most number of nodes in level

const sameTree = (p, q) => {
	if (!p || !q) return p === q;
	if (p.val !== q.val) return false;
	return sameTree(p.left, q.left) && sameTree(p.right, q.right);
};

// Run: O(n)
// Space: O(k) - most number of nodes in level
