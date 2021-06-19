function solution(arr1, arr2) {
  // arr1 열의 수와 arr2의 행의 수가 동일함
  let result = [];

  for (let k = 0; k < arr1.length; k++) {
    let res = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let multi = 0;
      for (let j = 0; j < arr1[0].length; j++) {
        multi = multi + arr1[k][j] * arr2[j][i];
      }
      res.push(multi);
    }
    result.push(res);
  }

  return result;
}

let arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
let arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];
let output = solution(arr1, arr2);
console.log(output);
