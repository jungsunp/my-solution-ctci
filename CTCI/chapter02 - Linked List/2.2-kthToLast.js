
const { LinkedList } = require('./utils');

// Solution - recursive
const findKthToLastRC = (k, head) => {
  if (k < 1 || !head) return 0;
  let index = findKthToLast(k, head.next) + 1;
  if (index == k) {
    console.log(`${k}th to last node is ${head.value}`);
  }
  return index;
};
// run time: O(n)
// space complexity: O(n)

// Solution - fast & slow runner
const findKthToLast = (k, head) => {
  if (k < 1 || !head) return 0;
  let fast = head;
  let slow = head;
  for (let i = 0; i < k; i++) {
    if (!fast) return;
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  console.log(slow.value);
};
// run time: O(n)
// space complexity: O(1)

/* TESTS */
var a = new LinkedList('1');
var b = new LinkedList('2');
var c = new LinkedList('3');
var d = new LinkedList('4');
var e = new LinkedList('5');
var f = new LinkedList('6');
var g = new LinkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

findKthToLast(3, a);
findKthToLast(1, a);
findKthToLast(2, a);
