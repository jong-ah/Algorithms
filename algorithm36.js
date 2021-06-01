function solution(arr, divisor) {
  let result = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
  return result.length ? result : [-1];
}

let arr = [3, 2, 6];
let divisor = 10;
solution(arr, divisor);
