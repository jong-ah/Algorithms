function solution(n) {
  let count = 1;

  const getSumN = (el) => {
    let sum = 0;

    for (let i = el; i < n; i++) {
      sum = sum + i;
      console.log(sum);
      if (sum === n) return count++;
      if (sum > n) break;
    }
  };

  for (let i = 1; i < n; i++) {
    getSumN(i);
  }
  console.log(count);
  return count;
}

let n = 15;
let output = solution(n);
console.log(output);
