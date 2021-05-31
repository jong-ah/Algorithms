function solution(n) {
  if (n === 0) {
    return 0;
  }

  let divisor = [1];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      divisor.push(i);
    }
  }

  return divisor.reduce((acc, cur) => {
    acc += cur;
    return acc;
  });
}

let n = 12;
solution(n);
