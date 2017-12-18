

// ## Q. Write class for stock prices

// *IN*
// addPrice(time, price) // 9:00:01, $101
// updatePrice(time, price) // 9:00:01, $99
// deletePrice(time)

// *OUT*
// min() // price
// max() // price

// Solution using heap

function Stock() {
  this.minHeap = [null];
  this.maxHeap = [null];
}

Stock.prototype.addPrice = (time, price) => {
  this.minHeap.push({ time, price });
  this.bubbleUpMin(this.minHeap.length - 1);
  this.maxHeap.push({ time, price });
  this.bubbleUpMax(this.minHeap.length - 1);
};
// Run: O(log n)
// Space: O(1)


Stock.prototype.updatePrice = (time, price) => {

  // min heap update
  for (let i = 1; i < this.minHeap.length; i++) {
    if (time !== this.minHeap[i].time) continue;
    this.minHeap[i] = { time, price };
    this.bubbleUpMin(i);
    this.bubbleDownMin(i);
    break;
  }

	// max heap update
	// ...
};
// Run: O(n)
// Space: O(1)

Stock.prototype.removePrice = (time) => {

  // min heap update
  for (let i = 1; i < this.minHeap.length; i++) {
    if (time !== this.minHeap[i].time) continue;
    const end = this.minHeap.pop();
    if (i === this.minHeap.length - 1) break;
    this.minHeap[i] = end;
    this.bubbleUpMin(i);
    this.bubbleDownMin(i);
    break;
  }

  // max heap update
  //...
};
// Run: O(n)
// Space: O(1)

Stock.prototype.bubbleUpMin = index => {
  let done = false;
  while (index > 1 && !done) {
    const pIdx = Math.floor(index / 2);
    if (this.minHeap[pIdx].price >
      this.minHeap[index].price) {
      const tmp = this.minHeap[pIdx];
      this.minHeap[pIdx] = this.minHeap[index];
      this.minHeap[index] = tmp;
      index = pIdx;
    } else {
      done = true;
    }
  }
};

Stock.prototype.bubbleDownMin = index => {
  let done = false;
  while (index < this.minHeap.length && !done) {
    const lChild = 2 * index;
    const rChild = 2 * index + 1;
    if (this.minHeap[index].price >
      Math.min(this.minHeap[lChild].price,
        this.minHeap[rChild].price)) {
      let swapIndex;
      if (this.minHeap[lChild].price <
        this.minHeap[rChild].price) {
        swapIndex = lChild;
      } else {
        swapIndex = rChild;
      }
      const tmp = this.minHeap[swapIndex];
      this.minHeap[swapIndex] = this.minHeap[index];
      this.minHeap[index] = tmp;
      index = swapIndex;
    } else {
      done = true;
    }
  }
};
