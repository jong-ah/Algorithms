function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum = sum + d[i];
    if (sum > budget) return i;
  }

  if (sum <= budget) return d.length;
}

let d = [1, 2, 3];
let budget = 10;
let output = solution(d, budget);
console.log(output);
