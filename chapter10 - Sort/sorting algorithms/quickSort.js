

var quickSort = function (array, left, right) {

  var leftIndex = partition(array, left, right);

  if (left < leftIndex - 1) {
    quickSort(array, left, leftIndex - 1);
  }

  if (right > leftIndex) {
    quickSort(array, leftIndex, right);
  }

  return array;
};

var swap = function (array, left, right) {
  var temp;
  temp = array[left];
  array[left] = array[right];
  array[right] = temp;
};

var partition = function (array, left, right) {
  var pivotIndex = Math.floor((left + right) / 2);
  var pivot = array[pivotIndex];

  leftIndex = left;
  rightIndex = right;

  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }

    while (array[rightIndex] > pivot) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex) {
      swap(array, left, right);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
};
