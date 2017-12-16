
const { Stack } = require('./utils');

// Solution
function SetOfStacks (capacity) {
  this.stackArr = [];
  this.capacity = capacity;
};

SetOfStacks.prototype.push = function (val) {
  let stack;
  if (this.stackArr.length === 0) {
    stack = new Stack();
    stack.push(val);
    this.stackArr.push(stack);
  } else {
    const curStack = this.stackArr[this.stackArr.length - 1];
    if (curStack.data.length === this.capacity) {
      stack = new Stack();
      stack.push(val);
      this.stackArr.push(stack);
    } else {
      curStack.push(val);
    }
  }
};

SetOfStacks.prototype.pop = function () {
  if (this.stackArr.length === 0) return;
  const curStack = this.stackArr[this.stackArr.length - 1];
  const retVal = curStack.pop();
  if (curStack.isEmpty()) this.stackArr.pop();
  return retVal;
};

SetOfStacks.prototype.popAt = function (index) {
  if (this.stackArr.length === 0) return;
  return this.stackArr[index].pop();
};

// Test
var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

console.log(s.stackArr);

s.popAt(2);

console.log(s.stackArr);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

console.log(s.stackArr);
