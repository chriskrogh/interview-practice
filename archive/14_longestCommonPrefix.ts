/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param strs array of strings
 */

function longestCommonPrefix(strs: string[]): string {
  let res = '';
  const word = strs[0];
  for (let i = 0; i < word.length; ++i) {
    for (let j = 1; j < strs.length; ++j) {
      if (strs[j][i] !== word[i]) return res;
    }
    res += word[i];
  }
  return res;
}

console.log(longestCommonPrefix(['flower', 'flow', 'floight']));
