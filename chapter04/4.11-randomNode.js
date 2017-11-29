

// Solution
function RandomBinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.size = 1;
}

RandomBinaryTree.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new RandomBinaryTree(value);
    else this.left.insert(value);
  } else {
    if (!this.right) this.right = new RandomBinaryTree(value);
    else this.right.insert(value);
  }
  this.size++;
};

RandomBinaryTree.prototype.getRandomNode = function () {
  const chance = Math.random();
  const leftSize = this.left ? this.left.size : 0;
  if (chance < 1 / this.size) {
    return this;
  } else if (chance < (1 + leftSize) / this.size) {
    return this.left.getRandomNode();
  } else {
    return this.right.getRandomNode();
  }
};


// Test
var bt = new RandomBinaryTree(4);
bt.insert(2);
bt.insert(6);
bt.insert(1);
bt.insert(3);
bt.insert(5);
bt.insert(7);
console.log(bt);
// bt.delete(5);
// console.log(bt);
var counts = {};
var randomnum;
for (var i = 0; i < 100000; i++) {
  randomnum = bt.getRandomNode().value;
  if (counts[randomnum] === undefined) {
    counts[randomnum] = 1;
  } else {
    counts[randomnum]++;
  }
}
for (var num in counts) {
  console.log(`${num}: ${counts[num] / 100000}%`); // random enough
}
