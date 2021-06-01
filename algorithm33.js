function solution(a, b) {
  let min = a;
  let max = b;
  let sum = 0;

  if (a > b) {
    max = a;
    min = b;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

let a = 3;
let b = 5;
solution(a, b);
