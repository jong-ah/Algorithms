// 참고 https://velog.io/@alvin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%82%BC%EA%B0%81-%EB%8B%AC%ED%8C%BD%EC%9D%B4-Javascript

function solution(n) {
  // n은 삼각형의 높이이다.
  // map으로 배열이 하나씩 커지는 것을 만든다.
  const answer = new Array(n).fill().map((el, i) => new Array(i + 1));
  console.log(answer)

  // 달팽이 안에 들어가는 숫자와 위치
  let count = 0;
  let x = -1;
  let y = 0;

  // 
  while (n > 0) {
    // 0, 1, 2, 3 => [0,0] [1,0] [2,0] [3,0] 
    for (let i = 0; i < n; i++) answer[++x][y] = ++count;
    // 0, 1, 2 => [3,1] [3,2] 
    for (let i = 0; i < n - 1; i++) answer[x][++y] = ++count;
    // 0, 1 => [2,1] [1,0] 
    for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++count;
    // n이 0이 아니면 남은 빈 칸이 있는 것이므로 반복해서 채운다.
    n -= 3;
  }

  return answer.flat();
}

let n = 4;
let output = solution(n);
console.log(output);
