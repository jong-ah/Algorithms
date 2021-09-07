// 한 행씩 내려올 때, 같은 열을 연속해서 밝을 수 없다.
// 가장 최고점을 구해야한다.
// dp
// https://shanepark.tistory.com/183

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  // console.log(land);
  return Math.max(...land[land.length - 1]);
}

let land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];
let output = solution(land);
console.log(output);
