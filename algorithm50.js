function solution(n) {
  let two = n
    .toString(2)
    .split('')
    .filter((el) => el === '1').length;

  while (n++) {
    let check = n
      .toString(2)
      .split('')
      .filter((el) => el === '1').length;

    if (check === two) return n;
  }
}
let n = 78;
let output = solution(n);
console.log(output);
