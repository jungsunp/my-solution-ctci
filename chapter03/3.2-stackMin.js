
const { Stack } = require('./utils');

// Solution
// min needs to operate in O(1)
function StackMin () {
  this.stack = new Stack();
  this.minStack = new Stack();
  this.minimum = null;
}

StackMin.prototype.push = function (val) {
  if (this.minimum === null || val <= this.minimum) {
    this.minStack.push(this.minimum);
    this.minimum = val;
  }
  this.stack.push(val);
};
// run time: O(1)

StackMin.prototype.pop = function () {
  if (this.stack.peek() === this.minimum) {
    this.minimum = this.minStack.pop();
  }
  return this.stack.pop();
};
// run time: O(1)

StackMin.prototype.min = function () {
  return this.minimum;
};
// run time: O(1)

StackMin.prototype.peek = function () {
  return this.stack.peek();
};

StackMin.prototype.isEmpty = function () {
  return this.stack.isEmpty();
};

// Test
var s = new StackMin();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), null);
