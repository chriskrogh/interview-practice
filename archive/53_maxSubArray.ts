/**
 * Given an integer array nums, find the contiguous
 * subarray (containing at least one number) which has the
 * largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 */

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    max = Math.max(max, current);
  }

  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/**
 * Iterate through the array of nums
 * Determine whether it makes sense to add the current number
 * or start fresh from the current number
 */
