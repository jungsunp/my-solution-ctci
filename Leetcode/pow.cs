

// https://leetcode.com/problems/powx-n/description/

public class Solution {
    public double MyPow(double x, int n) {
      if (n < 0) {
        n = -n;
        x = 1 / x;
      }
      return FastPow(x, n);
    }

    public double FastPow(double x, int n) {
      if (n == 0) { return 1.0; }
      double halfPow = FastPow(x, n / 2);
      if (n % 2 == 0) {
        return halfPow * halfPow;
      } else {
        return halfPow * halfPow * x;
      }
    }
}
