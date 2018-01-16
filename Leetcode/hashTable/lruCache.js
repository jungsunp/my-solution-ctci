

// https://leetcode.com/problems/lru-cache/description/

// Doubly-linked List
function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

function DlList() {
  this.head = new Node(); // dummy head
  this.tail = new Node(); // dummy tail
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

DlList.prototype.addAfterHead = function (node) {
  const next = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = next;
  next.prev = node;
};

DlList.prototype.removeNode = function (node) {
  const next = node.next;
  const prev = node.prev;
  prev.next = next;
  next.prev = prev;
};

DlList.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addAfterHead(node);
};

DlList.prototype.removeTail = function () {
  const tail = this.tail.prev;
  this.removeNode(tail);
  return tail;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dlList = new DlList();
  this.hashTable = new Map();
  this.size = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

  if (!this.hashTable.has(key)) return -1;
  const node = this.hashTable.get(key);
  this.dlList.moveToHead(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

  if (this.hashTable.has(key)) { // update only
    const node = this.hashTable.get(key);
    node.value = value;
    this.dlList.moveToHead(node);
    return;
  }

  if (this.size === this.capacity) {
    const tail = this.dlList.removeTail();
    this.hashTable.delete(tail.key);
  } else {
    this.size++;
  }

  const node = new Node(key, value);
  this.dlList.addAfterHead(node);
  this.hashTable.set(key, node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
