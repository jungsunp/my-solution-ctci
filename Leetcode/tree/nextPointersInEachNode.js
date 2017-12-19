

//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/discuss/


// Solution - constant space;
const connect = root => {
  if (!root) return;
  let parent = root;
  let child = root.left;
  while (child) {
    let tmpParent = parent;
    let tmpChild = child;
    while (tmpParent) {
      tmpChild.next = tmpParent.right;
      if (tmpParent.next) {
        tmpChild.next.next = tmpParent.next.left;
        tmpChild = tmpChild.next.next;
      }
      tmpParent = tmpParent.next;
    }
    parent = child;
    child = child.left;
  }
};

// Run: O(n)
// Space: O(1)
