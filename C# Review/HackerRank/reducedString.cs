

// https://www.hackerrank.com/challenges/reduced-string/problem

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
class Solution {

    static string super_reduced_string(string s){
        // Complete this function
        if (String.IsNullOrWhiteSpace(s)) {
            return s;
        }

        StringBuilder retStr = new StringBuilder(s);
        int index = 0;
        while (retStr.Length > 1 && index < retStr.Length - 1) {
            if (retStr[index] == retStr[index + 1]) {
                retStr.Remove(index, 2);
                if (index > 0) { index--; }
            } else {
                index++;
            }
        }

        if (retStr.Length == 0) return "Empty String";
        return retStr.ToString();
    }

    static void Main(String[] args) {
        string s = Console.ReadLine();
        string result = super_reduced_string(s);
        Console.WriteLine(result);
    }
}
