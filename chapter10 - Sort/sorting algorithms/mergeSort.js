

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    // split array
    var halves = split(array);
    var sortedHalf1 = mergeSort(halves[0]);
    var sortedHalf2 = mergeSort(halves[1]);
    return merge(sortedHalf1, sortedHalf2);
}

function split(array) {
    var middleIndex = Math.ceil(array.length / 2);
    return [array.slice(0, middleIndex), array.slice(middleIndex)];
};

function merge(arr1, arr2) {

    var sortedArr = [];

    var i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        sortedArr = sortedArr.concat(arr1.slice(i));
    }
    if (j < arr2.length) {
        sortedArr = sortedArr.concat(arr2.slice(j));
    }
    // append rest of the array if needed

    return sortedArr;
}
