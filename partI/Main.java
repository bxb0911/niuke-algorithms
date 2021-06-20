
public class ShortSubsequence {
  public int findShortest(int[] A, int n) {
    int left = -1, max = A[0];
    for (int i = 1; i < n; i++) {
      if (A[i] >= max) {
        max = A[i];
      } else {
        left = i;
      }
    }
    if (left == -1) {
      return 0;
    }
    int right = -1, min = A[n - 1];
    for (int j = n - 2; j >= 0; j--) {
      if (A[j] <= min) {
        min = A[j];
      } else {
        right = j;
      }
    }
    return left - right + 1;
  }
}