

// https://leetcode.com/problems/rotate-list/description/

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/

// Solution - Fast runner & slow runner
var rotateRight = function(head, k) {
   if (!head || !head.next || k === 0) return head;
   const dummy = new ListNode();
   dummy.next = head;

   // get length (needed in case k >= length)
   let fast = head;
   let length = 1;
   while (fast.next) {
       fast = fast.next;
       length++;
   }

   // send slow runner length -k
   k %= length;
   let slow = head;
   for (let i = 0; i < length - k -1; i++) {
       slow = slow.next;
   }

   fast.next = dummy.next;
   dummy.next = slow.next;
   slow.next = null;
   return dummy.next;
};
