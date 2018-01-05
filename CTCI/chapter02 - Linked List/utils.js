

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

module.exports = {
  LinkedList,
  printLinkedList,
};
