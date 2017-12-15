

// https://leetcode.com/problems/swap-nodes-in-pairs/description/
// constraints: use O(1) space

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummyHead = new ListNode();
  let node = head;
  let prev = dummyHead;
  while (node) {
      const next = node.next;
      if (next) {
          node.next = next.next;
          next.next = node;
          prev.next = next;
      } else {
          node.next = null;
          prev.next = node;
      }
      prev = node;
      node = node.next;
  }

  return dummyHead.next;
};
// Run: O(n)
// Space: O(1)
