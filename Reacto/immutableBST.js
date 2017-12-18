
// Immutable BST
// http://slides.com/mschreiber/reacto-4-7#/

// Solution
function ImmutableBST (val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
  this.size = 1 + (left && left.size || 0) + (right && right.size || 0);
}

ImmutableBST.prototype.insert = function (newVal) {
  let newLeft, newRight;
  if (newVal < this.val) {
    newRight = this.right;
    newLeft = this.left ? this.left.insert(newVal) : new ImmutableBST(newVal);
  } else {
    newLeft = this.left;
    newRight = this.right ? this.right.insert(newVal) : new ImmutableBST(newVal);
  }
  return new ImmutableBST(this.val, newLeft, newRight);
};
// run time: O(log n)
// space complexity: O(1)

ImmutableBST.prototype.contains = function (val){
  if (val === this.val) {
    return true;
  } else if (val < this.val) {
    return this.left ? this.left.contains(val) : false;
  } else {
    return this.right ? this.right.contains(val): false;
  }
};
// run time: O(log n)
// space complexity: O(1)

ImmutableBST.prototype.max = function () {
  if (!this.right) return this.val;
  return this.right.max();
};

ImmutableBST.prototype.min = function () {
  if (!this.left) return this.val;
  return this.left.min();
};

// http://www.algolist.net/Data_structures/Binary_search_tree/Removal
ImmutableBST.prototype.remove = function (val) {
  let newVal, newLeft, newRight;

  if (this.val === val) {
    if (this.left && this.right) { // Both subtrees
      if (this.left.size < this.right.size) {
        newLeft = this.left;
        newVal = this.right.min();
        newRight = this.right.remove(newVal);
      } else {
        newRight = this.right;
        newVal = this.left.max();
        newLeft = this.left.remove(newVal);
      }
      return new ImmutableBST(newVal, newLeft, newRight);
    } else if (this.left || this.right) { // only 1 subtree
      return this.left || this.right;
    } else { // no subtree
      return null;
    }
  } else {
    newVal = this.val;
    if (this.val > val) {
      newRight = this.right;
      newLeft = this.left ? this.left.remove(val) : null;
    } else {
      newLeft = this.left;
      newRight = this.right? this.right.remove(val) : null;
    }
    return new ImmutableBST(newVal, newLeft, newRight);
  }
};
// run time: O(log n)
// space complexity: O(1)

const bstA = (new ImmutableBST(5)).insert(3).insert(4);
const bstB = bstA.insert(6);
console.log('bstA:', bstA);
console.log('bstB:', bstB);
console.log(bstA.contains(4));
console.log(bstB.contains(4));
console.log(bstA.contains(6));
console.log(bstB.contains(6));
console.log(bstA == bstB);
console.log(bstA === bstB);

const bst = new ImmutableBST(5);
const bstMore = bst.insert(4).insert(3).insert(1).insert(10).insert(11).insert(15).insert(2).insert(100);
console.log(bst.contains(11));
console.log(bstMore.contains(11));
console.log(bstMore.max());
console.log(bstMore.min(11));
console.log(bstMore.remove(11).contains(11));
console.log(bstMore.remove(11).contains(3));
