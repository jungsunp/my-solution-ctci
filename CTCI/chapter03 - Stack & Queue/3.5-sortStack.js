
const { Stack } = require('./utils');

// Solution - multiple stacks allowed
const sortStackBF = (stack) => {
  if (stack.length === 0) return;
  const retStack = new Stack();
  const tempStack = new Stack();
  let val;
  while (!stack.isEmpty()) {
    val = stack.pop();
    while (!retStack.isEmpty() && retStack.peek() < val) {
      tempStack.push(retStack.pop());
    }
    retStack.push(val);
    while (!tempStack.isEmpty()) {
      retStack.push(tempStack.pop());
    }
  }
  return retStack;
};
// run time: O(n^2)
// space complexity: O(n)

// Solution - only one stack allowed
const sortStack = (stack) => {
  const tempStack = new Stack();

  // sort stack in reverse order to temp stack
  while (!stack.isEmpty()) {
    const curVal = stack.pop();
    while (!tempStack.isEmpty() && (tempStack.peek() > curVal)) {
      stack.push(tempStack.pop());
    }
    tempStack.push(curVal);
  }

  // copy back to stack
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return stack;
};
// run time: O(n^2)
// space complexity: O(n)

// Test
var s = new Stack();
s.push(99);
s.push(4);
s.push(1);
s.push(6);
s.push(8);
s.push(10);
s.push(22);
s.push(3);
s.push(72);

var sortS = sortStack(s);

while (!sortS.isEmpty()) {
  console.log(sortS.pop());
}
