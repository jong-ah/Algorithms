function solution(s) {
  let index = parseInt(s.length / 2);
  return s.length % 2 ? s[index] : s[index - 1] + s[index];
}

let s = 'abcde';
solution(s);
