
// Bracket Balancing
// http://slides.com/mschreiber/reacto-3-4#/

// Solution
// your input: [ ] ( ) { }
const matchBracket = (open, close) => {
  if (open === '[') return (close === ']');
  else if (open === '(') return (close === ')');
  else if (open === '{') return (close === '}');
  return false;
}

const hasBalancedBrackets = (str) => {
  const bracketStack = [];
  let open;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[' || str[i] === '(' || str[i] === '{') {
      bracketStack.push(str[i]);
    } else {
      open = bracketStack.pop();
      if (!matchBracket(open, str[i])) return false;
    }
  }

  return (bracketStack.length === 0);
};
// run time: O(n)
// space complexity: O(n)

console.log(hasBalancedBrackets(''));
console.log(hasBalancedBrackets('{}'));
console.log(hasBalancedBrackets('({[]})'));
console.log(hasBalancedBrackets('([{[]}})'));
console.log(hasBalancedBrackets('((((({[]})'));
