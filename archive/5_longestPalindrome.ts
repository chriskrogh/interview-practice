/**
 * Given a string s, return the longest palindromic substring in s.
 */

const expandFromMiddle = (s: string, left: number, right: number) => {
  if (!s || left > right) return 0;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
};

function longestPalindrome(s: string): string {
  if (!s) return '';

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; ++i) {
    const len = Math.max(
      expandFromMiddle(s, i, i),
      expandFromMiddle(s, i, i + 1),
    );
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

console.log(longestPalindrome('hollo'));
