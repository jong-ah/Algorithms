function solution(A, B) {
  // 큰 거랑 작은 거랑 곱하기
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.map((el, idx) => el * B[idx]).reduce((acc, cur) => (acc += cur));
}

let A = [1, 2];
let B = [3, 4];
let output = solution(A, B);
console.log(output);
