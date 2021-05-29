function solution(n, m) {
  const arr = [n, m];
  const answer = [];

  arr.sort((a, b) => a - b);

  const 최대공약수 = (arr) => {
    return arr.reduce((a, b) => {
      if (b === 0) return a;
      if (a % b === 1) return 1;
      return 최대공약수([b, a % b]);
    });
  };
  answer.push(최대공약수(arr));

  const 최소공배수 = (arr) => {
    return arr.reduce((a, b) => (a * b) / 최대공약수(arr));
  };
  answer.push(최소공배수(arr));

  console.log('최대공약수', answer[0], ',최소공배수', answer[1]);
  return answer;
}
let n = 2;
let m = 5;
solution(n, m);
