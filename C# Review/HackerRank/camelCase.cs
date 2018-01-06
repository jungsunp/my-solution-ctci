

// https://www.hackerrank.com/challenges/camelcase/problem

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static int camelcase(string s) {
        // Complete this function
        if (String.IsNullOrWhiteSpace(s)) {
            return 0;
        }
        int count = 1;
        foreach(char c in s) {
            if (c == Char.ToUpper(c)) {
              count++;
            }
        }
        return count;
    }

    static void Main(String[] args) {
        string s = Console.ReadLine();
        int result = camelcase(s);
        Console.WriteLine(result);
    }
}
