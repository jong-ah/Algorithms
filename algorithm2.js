function solution(absolutes, signs) {
  var answer = 0;

  // absolute과 signs의 같은 인덱스
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      answer = answer + -1 * absolutes[i];
    } else {
      answer = answer + absolutes[i];
    }
  }
  console.log(answer);
  return answer;
}
