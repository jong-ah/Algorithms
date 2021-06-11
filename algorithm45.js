function solution(n) {
  let three = n
    .toString(3)
    .split('')
    .reverse()
    .reduce((acc, cur) => (acc += cur));

  let ten = parseInt(three, 3);
  return ten;
}

let n = 45;
let output = solution(n);
console.log(output);
