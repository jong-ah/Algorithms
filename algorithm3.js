// 조합 배열 구하기
const getCombinations = function (arr, selectNum) {
  const result = [];
  if (selectNum === 1) {
    return arr.map((ele) => [ele]);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const fixed = arr[i];
    const restArr = arr.slice(i + 1);
    const combinationRest = getCombinations(restArr, selectNum - 1);
    const attached = combinationRest.map((ele) => [fixed, ...ele]);
    result.push(...attached);
  }
  return result;
};

function solution(nums) {
  // 조합 배열
  const numsArr = getCombinations(nums, 3);

  // 조합 배열의 합
  const sumArr = [];

  for (let i = 0; i < numsArr.length; i++) {
    let numSum = numsArr[i].reduce((sum, el) => {
      sum = sum + el;
      return sum;
    });
    sumArr.push(numSum);
  }

  // 소수인지 확인
  let check = new Array(sumArr.length).fill(0);

  for (let i = 0; i < sumArr.length; i++) {
    for (let j = 2; j < sumArr[i]; j++) {
      if (sumArr[i] % j === 0) {
        check[i] = 0;
        break;
      } else if (sumArr[i] % j !== 0 && check[i] === 0) {
        check[i] = 1;
      }
    }
  }

  let count = check.filter((el) => el > 0).length;
  return count;
}

let nums = [1, 2, 7, 6, 4];
let result = solution(nums);
console.log(result);
