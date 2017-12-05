

// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let max = 1;
    let start = 0;

    const expand = (left, right) => {
        while (left >= 0 && right <s.length && s[left] === s[right]){
            if (max < right - left + 1) {
                max = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    };

    for (let i = 1; i < s.length; i++) {
        // One character center
        expand(i-1, i+1);

        // Two characters center
        expand(i-1, i);
    }

    return s.slice(start, max);
};

console.log(longestPalindrome('babad'),'bab or aba');
console.log(longestPalindrome('bb'));
