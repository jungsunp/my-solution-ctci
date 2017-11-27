// Linked List
function linkedList (value) {
  this.value = value;
  this.next = null;
};

// Solution
const findKthToLast = (k, head) => {
  if (k < 1 || !head) return;
  let node = head;
  if (k === 1) {
    console.log(node.value);
    findKthToLast(k, node.next);
  } else {
    findKthToLast(k-1, node.next);
  }
};
// run time: O(n)
// space complexity: O(n)

/* TESTS */
var a = new linkedList('1');
var b = new linkedList('2');
var c = new linkedList('3');
var d = new linkedList('4');
var e = new linkedList('5');
var f = new linkedList('6');
var g = new linkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

findKthToLast(3, a);
console.log('------------');

findKthToLast(10, a);
console.log('------------');

findKthToLast(-1, a);
console.log('------------');

findKthToLast(0, a);
console.log('------------');

findKthToLast(1, a);
