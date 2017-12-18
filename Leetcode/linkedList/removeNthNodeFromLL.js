

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// 2 pass solution
const removeNthFromEndTwoPass = (head, n) => {
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }

  const dummy = new ListNode();
  dummy.next = head;
  node = dummy;
  length -= n;
  while (length > 0) {
      node = node.next;
      length--;
   }
  node.next = node.next.next;

  return dummy.next;
};
// Run: O(L)
// Space: O(1)

// 1 pass solution - Fast & slow runner
const removeNthFromEnd = (head, n) => {
	if (!head.next) return null;

	const dummy = new ListNode();
	dummy.next = head;
	let left = dummy;
	let right = dummy;

	let length = n + 1;
	while (length > 0) {
        right = right.next;
        length--;
    }

    while (right) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;
    return dummy.next;
};
// Run: O(L)
// Space: O(1)
