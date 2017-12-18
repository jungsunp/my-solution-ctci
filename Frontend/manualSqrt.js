

// https://www.glassdoor.com/Interview/Implement-a-square-root-function-Question-related-to-array-data-manipulation-QTN_819390.htm

// http://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method


const sqrt = (num, guess) => {
  if (!guess) guess = num / 2;
  let newGuess = ((num / guess) + guess) / 2;
  if (guess === newGuess) return guess;
  return sqrt(num, newGuess);
};

console.log(sqrt(9));
console.log(sqrt(42));
