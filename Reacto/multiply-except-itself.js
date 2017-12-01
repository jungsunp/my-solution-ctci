
// Practice interview with Gainlo
//  Interviewer: Vlad (Airbnb)
//    tip: 1. Pay more attention to detail
//         2. Start with simple solution - bigger focus

/*
Given an array A = [a1, a2, ... an]
Compute the array B = [b1, b2, ... bn] such as

b[i] = a1 * a2 * ... * a[i-1] * a[i+1] * ... * an
    = X[i] * a[i+1]* ... * an
    = X[i] * Y[i]


A = [2, 3, 1, 5]

b1 = 3 * 1 * 5 = 15
b2 = 2 * 1 * 5 = 10
b3 = 2 * 3 * 5 = 30
b4 = 2 * 3 * 1 = 6

B = [15, 10, 30, 6]

*/

// Division allowed
const multiplyExcept = arr => {
  let multiEverything = 1;
  let zeroCount = 0;
  arr.forEach(elem => {
    if (elem !== 0) multiEverything *= elem;
    else zeroCount++;
  });
  const returnArr = [];
  arr.forEach(elem => {
    let val;
    if (zeroCount === 1) {
      if (elem === 0) val = multiEverything;
      else val = 0;
    } else if (zeroCount > 1) {
       val = 0;
    } else val = multiEverything/elem;
    returnArr.push(val);
  });
  return returnArr;
};

// [];
// [2, 4, 0, 0];
// [0, 0, 0, 0];

// Division NOT allowed
const multiNoDiv = arr => {
    if (arr.length < 1) return [];

    const fromLeft = Array(arr.length).fill(0);
    fromLeft[0] = 1;
    for (let i = 1; i < arr.length; i++){
      const val = fromLeft[i-1] * arr[i-1];
      fromLeft[i] = val;
    }

    const fromRight = Array(arr.length).fill(0);
    fromRight[arr.length - 1] = 1;
    for (let i = arr.length - 1; i >= 0; i--){
      const val = fromRight[i+1] * arr[i+1];
      fromRight[i] = val;
    }

    const retArr = Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++){
      retArr[i] = fromLeft[i] * fromRight[i];
    }
    return retArr[i];
};


