

// https://www.hackerrank.com/challenges/compare-the-triplets/problem

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void solve(int a, int b, int[] scores){
        if (a > b) {
            scores[0]++;
        } else if (a < b) {
            scores[1]++;
        }
    }

    static int[] solve(int a0, int a1, int a2, int b0, int b1, int b2){
        // Complete this function
        int[] scores = {0, 0};
        solve(a0, b0, scores);
        solve(a1, b1, scores);
        solve(a2, b2, scores);
        return scores;
    }

    static void Main(String[] args) {
        string[] tokens_a0 = Console.ReadLine().Split(' ');
        int a0 = Convert.ToInt32(tokens_a0[0]);
        int a1 = Convert.ToInt32(tokens_a0[1]);
        int a2 = Convert.ToInt32(tokens_a0[2]);
        string[] tokens_b0 = Console.ReadLine().Split(' ');
        int b0 = Convert.ToInt32(tokens_b0[0]);
        int b1 = Convert.ToInt32(tokens_b0[1]);
        int b2 = Convert.ToInt32(tokens_b0[2]);
        int[] result = solve(a0, a1, a2, b0, b1, b2);
        Console.WriteLine(String.Join(" ", result));


    }
}
