

// solution
const checkPerm = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;
  strOne = strOne.split('').sort().join('');
  strTwo = strTwo.split('').sort().join('');
  return strOne === strTwo;
};
// run time: O(n log n)
// space complexity: O(n)

console.log(checkPerm('abc', 'abc'));
console.log(checkPerm('abc', 'cba'));
console.log(checkPerm('abc', 'bbc'));
console.log(checkPerm('abc', 'aabc'));
