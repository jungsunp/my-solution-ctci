
function Stack () {
  this.data = [];
};

Stack.prototype.push = function(value) {
  this.data.push(value);
};

Stack.prototype.pop = function() {
  return this.data.pop();
};

Stack.prototype.peek = function() {
  return this.data[this.data.length -1];
};

Stack.prototype.isEmpty = function() {
  return this.data.length === 0;
};

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
  Stack,
  LinkedList,
  printLinkedList
};
