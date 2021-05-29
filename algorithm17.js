function solution(x, n) {
  var answer = [];
  let y = x;

  for (let i = 1; i <= n; i++) {
    x = y;
    x = x * i;
    answer.push(x);
  }
  return answer;
}
