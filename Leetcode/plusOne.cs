

// https://leetcode.com/problems/plus-one/description/

public class Solution {
    public int[] PlusOne(int[] digits) {
        List<int> list = new List<int>();
        int carry = 1;
        for (int i = digits.Length - 1; i >= 0; i--) {
          int num = digits[i] + carry;
          if (num < 10) {
            list.Insert(0, num);
            carry = 0;
          } else {
            list.Insert(0, 0);
            carry = 1;
          }
        }
        if (carry == 1) list.Insert(0, 1);
        return list.ToArray();
    }
}
// Run: O(n)
// Space: O(n)


// Slightly more optimized solution
public class Solution {
    public int[] PlusOne(int[] digits) {
        for (int i = digits.Length - 1; i >= 0; i--) {
          int num = digits[i] + 1;
          if (num <= 9) {
            digits[i]++;
            return digits;
          } else { // num == 10
            digits[i] = 0;
          }
        }
        int[] retDigits = new int[digits.Length + 1];
        retDigits[0] = 1;
        return retDigits;
    }
}
// Run: O(n)
// Space: O(1) most case, O(n) worst case
