

// https://leetcode.com/problems/merge-two-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode();
    let node = dummy;
    let left = l1;
    let right = l2;

    while (left && right) {
        if (left.val < right.val) {
            node.next = left;
            left = left.next;
        } else {
            node.next = right;
            right = right.next;
        }
        node = node.next;
    }

    if (left) node.next = left;
    else if (right) node.next = right;

    return dummy.next;
};
// run: O(m + n)
// space: O(1)
