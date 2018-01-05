

// Solution - Brute Force
// can call str.includes only once
// const stringRotation = (s1, s2) => {
//   if (s1.length !== s2.length) return false;
//   for (let i = 0; i < s1.length; i++) {
//     const str = s1.slice(i) + s1.slice(0,i);
//     if (str === s2) return true;
//   }
//   return false;
// };
// run time: O(n)
// space complexity: O(n)

// Solution - uses includes
const stringRotation = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  return (s2 + s2).includes(s1);
};
// run time: O(n)
// space complexity: O(n)

// Test
console.log(stringRotation('waterbottle', 'waterbottle'), true);
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);
