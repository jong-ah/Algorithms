function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }
  console.log(arr1);
  return arr1;
}

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];
solution(arr1, arr2);
