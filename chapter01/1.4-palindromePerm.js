

// Solution
const palinPerm = (str) => {
  const charLib = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++){
    if (str[i] !== ' ') {
      if (!charLib[str[i]]) charLib[str[i]] = 0;
      charLib[str[i]]++;
    }
  }
  const oddCharArr = Object.keys(charLib).filter(char => {
    return charLib[char] % 2 === 1;
  });
  return oddCharArr.length < 2;
};
// run time: O(n)
// space complexity: O(n)

console.log(palinPerm('ttt'));
console.log(palinPerm('taco cat'));
console.log(palinPerm('bbccata'));
console.log(palinPerm('tttabttt'));
console.log(palinPerm('Tact Coa'));
console.log(palinPerm('Tact boa'));
