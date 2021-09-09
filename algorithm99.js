function solution(n, a, b) {
  var answer = 0;

  // 이길 때마다 번호가 반씩 줄어든다.
  // 번호가 같아지면 같이 붙는다.
  while (a !== b) {
    a = Math.ceil(a / 2);
    // console.log(a)
    b = Math.ceil(b / 2);
    // console.log(b)
    answer++;
  }

  return answer;
}

let n = 8;
let a = 4;
let b = 7;
let output = solution(n, a, b);
console.log(output);
