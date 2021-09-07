// 미리 구할 숫자의 갯수 t
// 10~15는 각각 대문자 A~F로 출력한다.=> 대문자
// while, for문 나누니깐 제곱 시간복잡도가 안 되어서 그런가?

function solution(n, t, m, p) {
  var answer = '';
  let temp = '';
  let i = 0;
  let cnt = 0;

  while (temp.length < t * m) {
    temp += i.toString(n);
    i++;
  }

  // console.log(temp);
  for ( let i = 0; i < temp.length; i++){
    if ( cnt === t) break;
    if ( i % m === p-1) {
      answer += temp[i]
      cnt++
    }
  }
  return answer.toUpperCase();
}

// let n = 2;
// let t = 4;
// let m = 2;
// let p = 1;
let n = 16;
let t = 16;
let m = 2;
let p = 1;
let output = solution(n, t, m, p);
console.log(output);
