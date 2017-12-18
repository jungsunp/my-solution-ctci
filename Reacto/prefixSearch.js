
// Prefix search
// http://slides.com/mschreiber/reacto-4#/

// * Brute force solution
// const findsWordStartingWith = (book, str) => {
//   const bookText = book.text.toLowerCase();
//   const searchStr = str.toLowerCase();
//   const matchArr = [];
//
//   for (let i = 0; i < bookText.length - searchStr.length; i++) {
//     if (i !== 0 && bookText[i-1] !== ' ') continue;
//     if (bookText.slice(i).startsWith(searchStr)) matchArr.push(i);
//   }
//
//   return matchArr;
// };
// run time: O(n) - n: number of chars in book
// space complexity: O(n)

// * Trie solution
//
// e.x) 'this is text'
// trie = {
//   t: {
//     indexes: [0,9],
//     h: {
//       indexes: [0],
//       i: {
//         indexes: [0],
//         s: {
//           indexes: [0]
//         }
//       }
//     },
//     e: { ... }
//   },
//   i : {
//     indexes: [5],
//     s: {
//       indexes: [5]
//     }
//   }
// };
const buildTrie = (text) => {
  const trie = {};
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let node = trie;
    const startIndex = i;
    while (text[i] && !text[i].match(/[ .,:!?]/)) {
      const char = text[i];
      node[char] = node[char] || {indexes: []};
      node[char].indexes.push(startIndex);
      node = node[char];
      i++;
    }
  }
  return trie;
};

const cache = new Map();
const findOrCreateTrie = (book) => {
  if (cache.get(book.id)) return cache.get(book.id);
  const trie = buildTrie(book.text);
  cache.set(book.id, trie);
  return trie;
};

const findsWordStartingWith = (book, str) => {
  str = str.toLowerCase();
  const trie = findOrCreateTrie(book);
  let node = trie;
  for (let i = 0; i < str.length; i++) {
    node = node[str[i]];
    if (!node) return;
  }
  return node.indexes;
};
// run time: O(m) - m: number of chars in search string
// space complexity: O(n) - n: number of chars in book

const exampleBook = {
  id: 75,
  text: 'Be patient toward all that is unsolved in your heart and try to love the questions themsolves like ...'
};

console.log(findsWordStartingWith(exampleBook, 'a'));
console.log(findsWordStartingWith(exampleBook, 't'));
console.log(findsWordStartingWith(exampleBook, 'th'));
console.log(findsWordStartingWith(exampleBook, 'z'));
