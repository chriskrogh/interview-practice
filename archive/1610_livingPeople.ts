const livingPeople = (arr: number[][]): number => {
  const m: Record<number, number> = {};
  Array(101)
    .fill(null)
    .map((_, i) => {
      m[1900 + i] = 0;
    });

  for (const pair of arr) {
    for (let i = pair[0]; i <= pair[1]; ++i) {
      m[i]++;
    }
  }

  let max = { year: 0, val: 0 };
  for (const key in m) {
    if (m[key] > max.val) {
      max = { year: parseInt(key), val: m[key] };
    }
  }

  return max.year;
};

console.log(
  livingPeople([
    [1900, 1970],
    [1920, 1970],
    [1970, 2000],
  ]),
);
