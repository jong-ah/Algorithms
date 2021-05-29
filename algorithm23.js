function solution(n) {
  let answer = n
    .toString()
    .split('')
    .map((num) => Number(num))
    .sort((a, b) => b - a)
    .reduce((acc, cur) => (acc += `${cur}`));

  return Number(answer);
}

let n = 118372;
solution(n);
