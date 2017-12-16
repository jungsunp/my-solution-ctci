

// Solution
const tripleStep = (step, memo) => {
	if(!memo) memo = new Map();

	if (step < 1) return;
	if (step === 1) return 1;
	if (step === 2) return 2;
	if (step === 3) return 4;

	if (memo.has(step)) return memo.get(step);
	const ret= tripleStep(step-1, memo) + tripleStep(step-2, memo) + tripleStep(step-3, memo);
  memo.set(step, ret);
	return ret;
};
// Run: O(n)
// Space: O(n)

/* TEST */

console.log(tripleStep(4), 7);
console.log(tripleStep(5), 13);
console.log(tripleStep(6), 24);
console.log(tripleStep(7), 44);
console.log(tripleStep(100), 1.8039638081510093e+26);
