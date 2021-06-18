function solution(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  for (let i = 2; i <= n; i++) {
    memo[i] = (solution(i - 1, memo) + solution(i - 2, memo)) % 1234567;
  }

  let res = memo[n] % 1234567;
  console.log(memo);
  return res;
}

let n = 5;
let output = solution(n);
console.log(output);
