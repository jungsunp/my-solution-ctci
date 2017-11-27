// Linked List
function LinkedList (value) {
  this.value = value;
  this.next = null;
};

const printLinkedList = head => {
  console.log('*** start of LL ***');
  let node = head;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
  console.log('*** end of LL ***');
};

// Soution
const partition = (head, partNum) => {
  let smHead, smTail, lgHead, lgTail;
  let node = head;
  while (node) {
    if (node.value < partNum) {
      if (!smHead) {
        smHead = new LinkedList(node.value);
        smTail = smHead;
      } else {
        smTail.next = new LinkedList(node.value);
        smTail = smTail.next;
      }
    } else {
      if (!lgHead) {
        lgHead = new LinkedList(node.value);
        lgTail = lgHead;
      } else {
        lgTail.next = new LinkedList(node.value);
        lgTail = lgTail.next;
      }
    }
    node = node.next;
  }
  if (smTail && lgHead) {
    smTail.next = lgHead;
  }
  return smHead;
};
// run time: O(n)
// space complexity: O(n)

// Test
var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
printLinkedList(newa);

