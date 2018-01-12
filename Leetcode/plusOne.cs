

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
          } else { // num == 10
            list.Insert(0, 0);
            carry = 1;
          }
        }
        if (carry == 1) list.Insert(0, 1);
        return list.ToArray();
    }
}
