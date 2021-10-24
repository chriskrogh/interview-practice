/**
 * @param heights
 * Given n non-negative integers a1, a2, ..., an ,
 * where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints
 * of the line i is at (i, ai) and (i, 0).
 *
 * Find two lines, which, together with the x-axis forms a
 * container, such that the container contains the most water.
 */

function maxArea(heights: number[]): number {
  let left = 0,
    right = heights.length - 1;

  let max = 0;

  while (left <= right) {
    const height = Math.min(heights[left], heights[right]);
    const area = height * (right - left);
    max = Math.max(max, area);

    if (heights[left] < heights[right]) left++;
    else right--;
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
