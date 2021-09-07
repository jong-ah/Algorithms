// s.length를 이진법으로 바꾼다.
// 0이 없는게 아니라 1이 하나만 있을 때까지 계쏙 한다.

function solution(s) {
  let sum = s.length;
  let count = 0;
  let deleteZero = 0;
  let regexAll = new RegExp('0', 'g');

  while (s !== '1') {
    s = s.replace(regexAll, '');
    console.log(s);
    deleteZero += sum - s.length;
    count++;
    s = s.length.toString(2);
    console.log(s);
    sum = s.length;
  }

  return [count, deleteZero];
}

// let s = '110010101001';
let s = '01110';
let output = solution(s);
console.log(output);
