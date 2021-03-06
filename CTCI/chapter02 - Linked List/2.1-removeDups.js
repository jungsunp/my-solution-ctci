
const { LinkedList, printLinkedList } = require('./utils');

// Solution - hash table solution
const removeDupsHT = head => {
  const dupArr = {};
  let node = head;
  let prevNode;
  while (node) {
    if (!dupArr[node.value]) {
      dupArr[node.value] = true;
      prevNode = node;
    } else {
      prevNode.next = node.next;
    }
    node = node.next;
  };
};
// run time: O(n)
// space complexity: O(n)

// Solution - no buffer memory

const checkDup = (head, node) => {
  let curNode = head;
  while (curNode !== node) {
    if (curNode.value === node.value) return true;
    curNode = curNode.next;
  }
  return false;
};

const removeDups = head => {
  let node = head;
  while (node) {
    if (node.next && checkDup(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
};
// run time: O(n^2)
// space complexity: O(1)

// Tests
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);

var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('g');
var i = new LinkedList('g');
var j = new LinkedList('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDups(f);
printLinkedList(f);

var k = new LinkedList('g');
var l = new LinkedList('g');
var m = new LinkedList('g');
var n = new LinkedList('b');
var o = new LinkedList('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

removeDups(k);
printLinkedList(k);
