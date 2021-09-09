function solution(s) {
  // 하나도 압축안되는 경우 넣어주기
  var answer = [s.length];

  // 최대로 압축할 수 있는 단위가 문자열/2이다.
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    // 압축되는 단위
    let cnt = 1;
    // 압축되는 숫자
    let string = '';
    for (let j = 0; j < s.length; j += i) {
      // 0,1 1,2 ... (지금은 1차이지만 /2까지 범위가 넓어진다)
      const current = s.substr(j, i);
      // 1,2 2,3 ...
      const next = s.substr(j + i, i);
      if (current === next) {
        cnt++;
      } else {
        string = cnt > 1 ? string + cnt + current : string + current;
        cnt = 1;
      }
    }
    answer.push(string.length);
  }
  return Math.min(...answer);
}

let s = 'aabbaccc';
let output = solution(s);
console.log(output);
