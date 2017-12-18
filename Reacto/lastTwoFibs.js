
// Last two Fibonaccis
// http://slides.com/benjaminconant/reacto-3-6#/

// Solution - recursion
const nthFib = (index) => {
  if (index === 1) return [undefined, undefined];
  if (index === 2) return [undefined, 1];
  if (index === 3) return [1, 1];

  const nMinusOneFib = nthFib(index - 1);
  return [nMinusOneFib[1], nMinusOneFib[0] + nMinusOneFib[1]];
};
// run time: O(n)
// space complexity: O(n)

console.log(nthFib(1));
console.log(nthFib(2));
console.log(nthFib(3));
console.log(nthFib(4));
console.log(nthFib(5));
console.log(nthFib(20));
