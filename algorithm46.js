const unshiftZero = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].length < n) {
      arr[i].unshift('0');
    }
  }
  return arr;
};

const getSumMap = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        arr1[i][j] = '1';
      }
    }
  }
  return arr1;
};

function solution(n, arr1, arr2) {
  let arr1Map = unshiftZero(
    arr1.map((el) => el.toString(2).split('')),
    n
  );
  let arr2Map = unshiftZero(
    arr2.map((el) => el.toString(2).split('')),
    n
  );

  let sumMap = getSumMap(arr1Map, arr2Map);
  let result = sumMap.map((el) =>
    el.map((el2) => (el2 === '1' ? '#' : ' ')).join('')
  );

  return result;
}
let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
let output = solution(n, arr1, arr2);
console.log(output);
