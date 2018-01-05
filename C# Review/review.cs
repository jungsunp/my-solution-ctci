
public class Program
{
  public static void Main (string[] arbgs)
  {
    // ...
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
}
