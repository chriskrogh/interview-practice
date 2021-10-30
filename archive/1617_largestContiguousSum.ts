/**
 * Givesn a list of integers, return the largest sum that can be
 * computed by adding contiguous numbers (numbers in an unbreaking sequence)
 * @param arr list of integers
 * @returns largest contiguous sum
 */

const largestContiguousSum = (arr: number[]): number => {
  let max = 0;
  let sum = 0;
  for (const num of arr) {
    if (sum + num < 0) {
      sum = 0;
    } else {
      sum += num;
    }
    max = Math.max(max, sum);
  }
  return max;
};

console.log(largestContiguousSum([1, -2, 3, -2, 5]));
