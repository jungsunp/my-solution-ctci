// uses hash table
function isUnique (str) {
  const charTable = {};
  for (let i = 0; i < str.length; i++) {
    if (charTable[str[i]] === 1) {
      return false;
    } else {
      charTable[str[i]] = 1;
    }
  }
  return true;
}

console.log(isUnique('abc')); // true
console.log(isUnique('aabc')); // false
console.log(isUnique('abcdefghi')); // true
console.log(isUnique('abcdeefghi')); //false
