

// https://leetcode.com/problems/sort-colors/description/

public class Solution {
    public void SortColors(int[] nums) {
      int lastZero = -1;
      int lastOne = -1;
      int index = 0;
      while (index < nums.Length) {
        if (nums[index] == 0) {
          lastZero++;
          if (lastZero < index) {
            nums[index] = nums[lastZero];
            nums[lastZero] = 0;
          } else {
            index++;
          }
        } else if (nums[index] == 1) {
          lastOne = Math.Max(lastOne, lastZero);
          lastOne++;
          if (lastOne < index) {
            nums[index] = nums[lastOne];
            nums[lastOne] = 1;
          }
          index++;
        } else { // 2
          index++;
        }
      }
    }
}
// Run: O(n) - one pass
// Space: O(1)
