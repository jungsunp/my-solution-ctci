

// https://leetcode.com/problems/add-two-numbers/description/

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
var addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let retList, curList;

  let val;
  let carry = 0;
  while (node1 || node2 || carry === 1) {
      if (node1 && node2) {
          val = node1.val + node2.val;
          node1 = node1.next;
          node2 = node2.next;
      } else if (node1) {
          val = node1.val;
          node1 = node1.next;
      } else if (node2) {
          val = node2.val;
          node2 = node2.next;
      } else {
          val = 0;
      }
      if (carry === 1) {
          val++;
          carry = 0;
      }
      if (val >= 10) {
          val = val % 10;
          carry = 1;
      }
      if (!retList) {
          retList = new ListNode(val);
          curList = retList;
      } else {
          curList.next = new ListNode(val);
          curList = curList.next;
      }
  }

  return retList;
};

// Run: O(m + n)
// Space: O(Max(m, n))
