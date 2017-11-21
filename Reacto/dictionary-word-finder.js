
// Brute force solution
// const defintionOf = (word, dict) => {
//   for (let i = 0; i < dict.length; i++) {
//     if (dict[i].indexOf(word + '-') === 0) {
//       return dict[i].split('-')[1];
//     }
//   }
// };
// run time: O(n)
// space complexity: O(1)

// Binary search solution
// const defintionOf = (word, dict) => {
//   let prevLeft = 0;
//   let prevRight = dict.length - 1;
//   let index;
//
//   do {
//     index = Math.floor((prevLeft + prevRight) / 2);
//     if (dict[index].indexOf(word + '-') === 0) {
//       return dict[index].split('-')[1];
//     } else if (word < dict[index]) {
//       prevRight = index - 1;
//     } else {
//       prevLeft = index + 1;
//     }
//   } while (prevLeft >= 0 && prevRight < dict.length && prevLeft <= prevRight);
//
// };
// run time: O(log n)
// space complexity: O(1)

// Hash map solution
const cache = new Map(); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const findOrCreateHashMap = (dict) => {
  if (cache.has(dict)) return cache.get(dict);

  const hashmap = new Map();
  dict.forEach(entry => {
    const keyValArr = entry.split('-');
    hashmap.set(keyValArr[0], keyValArr[1]);
  });
  cache.set(dict, hashmap);

  return hashmap;
};
const defintionOf = (word, dict) => {
  const hasmap = findOrCreateHashMap(dict);
  return hasmap.get(word);
};
// run time: O(1) - for the first run: O(n)
// space complexity: O(n)

const dictionary = [
  'a-aaaaa',
  'be-bbbbeeeeeee',
  'in-innnnnnnn the boxxxxx',
  'that-that is that'
];

console.log(defintionOf('a', dictionary));
console.log(defintionOf('be', dictionary));
console.log(defintionOf('in', dictionary));
console.log(defintionOf('that', dictionary));
console.log(defintionOf('aa', dictionary));
