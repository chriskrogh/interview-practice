function frequencySort(s: string): string {
  const m: Record<string, number> = {};
  // determine character frequencies
  for (const c of s) {
    if (m[c]) {
      m[c]++;
    } else {
      m[c] = 1;
    }
  }

  // sort characters by frequency
  const tuples: { key: string; value: number }[] = Object.keys(m).map(
    (key) => ({ key, value: m[key] }),
  );
  tuples.sort((a, b) => b.value - a.value);

  // build result
  let res = '';
  tuples.forEach((tuple) => {
    for (let i = 0; i < tuple.value; i++) {
      res += tuple.key;
    }
  });

  return res;
}

console.log(frequencySort('trees'));
