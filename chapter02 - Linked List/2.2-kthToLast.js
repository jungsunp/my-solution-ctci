
const { LinkedList } = require('./utils');

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
console.log('------------');

findKthToLast(10, a);
console.log('------------');

findKthToLast(-1, a);
console.log('------------');

findKthToLast(0, a);
console.log('------------');

findKthToLast(1, a);
