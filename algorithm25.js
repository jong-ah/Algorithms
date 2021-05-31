function solution(n) {
  var answer = n
    .toString()
    .split('')
    .map((el) => Number(el))
    .reverse();

  return answer;
}
