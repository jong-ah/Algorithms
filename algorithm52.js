function solution(s) {
  let arr = s.split(' ').map((el) => Number(el));
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return `${min} ${max}`;
}
let s = '-4 -4';
let output = solution(s);
console.log(output);
