

// https://leetcode.com/problems/generate-parentheses/description/

// Solution

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n, memo) {
    if (n === 0) return [''];
    if (!memo) memo = new Map();
    if (memo.has(n)) return memo.get(n);

    const retArr = [];
    for (let i = 0; i < n; i++) {
        const leftArr = generateParenthesis(i, memo);
        const rightArr = generateParenthesis(n - i - 1, memo);
        leftArr.forEach(leftParen => {
            rightArr.forEach(rightParen => {
                retArr.push('(' + leftParen + ')' + rightParen);
            });
        });
    }

    memo.set(n, retArr);
    return retArr;
};

// Run: O(4^n / sqrt{n}})  - not sure why.. (Catalan number's upper bound??)
// Space: O(4^n / sqrt{n}})
