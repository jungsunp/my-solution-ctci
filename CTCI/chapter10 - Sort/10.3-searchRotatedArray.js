

// Solution

const searchInRotatedArray = (arr, target, left = 0, right) => {
	if (!arr) return;
	if (right === undefined) right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	if (left > right) return -1;

	if (arr[mid] === target) return mid;
	if (arr[left] === target) return left;
	if (arr[right] === target) return right;

	if (arr[0] < arr[mid]) {
		// first half is sorted
		if (target < arr[mid] && target > arr[left]){
			return searchInRotatedArray(arr, target, left + 1, mid - 1);
		} else {
			return searchInRotatedArray(arr, target, mid + 1, right - 1);
		}
	} else if (arr[0] > arr[mid]) {
		// second half is sorted
		if (target > arr[mid] && target < arr[right]) {
			return searchInRotatedArray(arr, target, mid + 1, right - 1);
		} else {
			return searchInRotatedArray(arr, target, left + 1, mid - 1);
		}
	} else {
		let result = searchInRotatedArray(arr, target, left + 1, mid - 1);
		if (result === -1) result = searchInRotatedArray(arr, target, mid + 1, right - 1);
		return result;
	}
};
// Run time: O(log n) - if unique. With duplicate it will be O(n)
// Space: O(log n)

// Test
// searchInRotatedArray can be called
console.log(searchInRotatedArray() === undefined);

// find in unrotated array
console.log(searchInRotatedArray([1, 2, 3, 4], 3) === 2);

// find in rotated array
console.log(searchInRotatedArray([3, 4, 1, 2], 1) === 2);

// find last item in rotated array
console.log(searchInRotatedArray([3, 4, 1, 2], 4) === 1);

// find last item in rotated array
console.log(searchInRotatedArray([2, 2, 2, 3, 4, 2], 4) === 4);

// return -1 for values not in array
console.log(searchInRotatedArray([3, 4, 1, 2], 10) === -1);
