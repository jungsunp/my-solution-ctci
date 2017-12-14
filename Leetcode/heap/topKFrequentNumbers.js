/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const hash = new Map();

  // Build hash map with frequencies
  nums.forEach(num => {
      if (!hash.has(num)) hash.set(num, 1);
      else hash.set(num, hash.get(num) + 1);
  });
  console.log('has', hash)

  // Build max-heap
  const maxHeap = [ null ];
  hash.forEach((freq, num) => {
      maxHeap.push({ num, freq });
      bubbleUp(maxHeap);
  });
  console.log('maxHeap', maxHeap)

  // Remove max head k times
  const retArr = [];
  for (let i = 0; i < k; i++){
      retArr.push(maxHeap[1].num);
      const end = maxHeap.pop();
      maxHeap[1] = end;
      bubbleDown(maxHeap);
  }
  return retArr;
};

const bubbleUp = heap => {
	let done = false;
	let index = heap.length - 1;
	while (index > 1 && !done) {
		const pIdx = Math.floor(index / 2);
		if (heap[pIdx].freq < heap[index].freq) {
			const tmp = heap[pIdx];
			heap[pIdx] = heap[index];
			heap[index] = tmp;
			index = pIdx;
		} else {
			done = true;
		}
	}
};

const bubbleDown = heap => {
	let done = false;
	let index = 1;
	while (index < heap.length && !done) {
		const lChild = 2 * index;
    const rChild = 2 * index + 1;
    const lFreq = heap[lChild] ? heap[lChild].freq : 0;
    const rFreq = heap[rChild] ? heap[rChild].freq : 0;
		if (lFreq > 0 && heap[index].freq < Math.max(lFreq, rFreq)) {
			let swapIndex;
			if (lFreq < rFreq) {
				swapIndex = rChild;
			} else {
				swapIndex = lChild;
			}
			const tmp = heap[swapIndex];
			heap[swapIndex] = heap[index];
			heap[index] = tmp;
			index = swapIndex;
		} else {
			done = true;
		}
	}
};

console.log(topKFrequent([1,1,1,2,2,3], 2)); //2
console.log(topKFrequent([-1,-1], 1)); //-1
