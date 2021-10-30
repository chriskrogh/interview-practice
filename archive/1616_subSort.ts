/**
 * Given a list of numbers, find the largest m and smallest n
 * such that sorting the numbers in between m and n sorts the entire array
 * @param arr list of numbers
 * @returns m and n
 */

/**
 * Example:
 * 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19
 */

const getStart = (arr: number[]): number => {
  const copy = Array.from(arr);
  let lastSwap = copy.length - 1;
  for (let i = copy.length - 1; i > 0; --i) {
    if (copy[i] < copy[i - 1]) {
      // swap code
      const t = copy[i];
      copy[i] = copy[i - 1];
      copy[i - 1] = t;

      // update last swap position
      lastSwap = i - 1;
    }
  }
  return lastSwap;
};

const getEnd = (arr: number[]): number => {
  const copy = Array.from(arr);
  let lastSwap = 0;
  for (let i = 0; i < copy.length - 1; ++i) {
    if (copy[i] > copy[i + 1]) {
      // swap code
      const t = copy[i];
      copy[i] = copy[i + 1];
      copy[i + 1] = t;

      // update last swap position
      lastSwap = i + 1;
    }
  }
  return lastSwap;
};

const subSort = (arr: number[]): number[] => {
  return [getStart(arr), getEnd(arr)];
};

console.log(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
