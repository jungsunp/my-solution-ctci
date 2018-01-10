using System;
using System.Collections.Generic;

public class Program
{
  public static void Main (string[] arbgs)
  {
    Console.Write("Please enter a string: ");
    string text = Console.ReadLine();

    Console.Write("Please enter an integer: ");
    int number = int.Parse(Console.ReadLine());

    Console.WriteLine("You entered '{0}' and {1}", text, number);
    Console.ReadKey();

    int fact = Factorial(1);
  }

  #region factorial
  static int Factorial (int number)
  {
    int answer = 1;
    for (int i = 2; i <= number; i++)
    {
      answer *= i;
    }
    return answer;
  }
  #endregion

  static int test (int[] nums) {
    Stack<int> stack = new Stack<int>();
    stack.push(1);
    stack.push(2);
    Console.WriteLine(stack.pop());
    Console.WriteLine(stack.pop());
  }
}
