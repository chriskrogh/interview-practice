/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 */

function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  const set = new Set<string>();

  let left = 0,
    right = 0,
    max = 1;

  while (left <= right && right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return max;
}

console.log(lengthOfLongestSubstring('hello'));

/**
 * Iterate over the string with two pointers
 * We increment the right pointer until s[left] === s[right]
 * then increment the left pointer.
 * Keep track of elements in the region using a set
 */
