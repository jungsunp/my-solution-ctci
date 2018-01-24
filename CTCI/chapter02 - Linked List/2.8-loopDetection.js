

const { LinkedList } = require('./utils');

// Solution
const loopDetection = head => {
  if (!head.next) return;
  const nodeMap = new Map();
  let node = head;
  while (node) {
    if (nodeMap.get(node)) return node;
    nodeMap.set(node, true);
    node = node.next;
  }
};

// There is faster solution with fast and slow runner

// TEST
// A -> B -> C -> D -> E -> C

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a), true);

var A = new LinkedList();
var B = new LinkedList();
var C = new LinkedList();
var D = new LinkedList();
var E = new LinkedList();
var F = new LinkedList();

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A), false);
