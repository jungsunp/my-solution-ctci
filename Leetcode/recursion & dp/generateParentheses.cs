

// https://leetcode.com/problems/generate-parentheses/description/

public class Solution {
    public List<string> GenerateParenthesis(int n) {
        Dictionary<int, List<string>> memo = new Dictionary<int, List<string>>();
        return GenerateParenthesis(n, memo);
    }

    public List<string> GenerateParenthesis(int n, Dictionary<int, List<string>> memo) {
        List<string> retList = new List<string>();
        if (n == 0) {
          retList.Add("");
          return retList;
        }
        if (memo.ContainsKey(n)) return memo[n];

        for (int i = 0; i < n; i++) {
          List<string> leftList = GenerateParenthesis(i, memo);
          List<string> rightList = GenerateParenthesis(n - i - 1, memo);
          foreach(string left in leftList) {
            foreach(string right in rightList) {
              retList.Add("(" + left + ")" + right);
            }
          }
        }
        memo.Add(n, retList);
        return retList;
    }
}

// Run: O(4^n / sqrt{n}})  - not sure why.. (Catalan number's upper bound??)
// Space: O(4^n / sqrt{n}})
