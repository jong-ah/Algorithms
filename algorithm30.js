function solution(n) {
  let answer = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer = answer + '수';
    } else {
      answer = answer + '박';
    }
  }
  console.log(answer);
  return answer;
}

let n = 3;
solution(n);
