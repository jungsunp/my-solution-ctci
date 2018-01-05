

const { LinkedList } = require('./utils');

// Solution - hash map
const intersection = (l1, l2) => {
  const nodeMap = new Map();
  let node = l1;
  while (node) {
    nodeMap.set(node, true);
    node = node.next;
  }
  node = l2;
  while (node) {
    if (nodeMap.get(node)) return node;
    node = node.next;
  }
};
// run time: O(n + m)
// space complexity: O(n + m)

// Test
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

var intersectNode = intersection(a, a1);

console.log(intersectNode.value);
