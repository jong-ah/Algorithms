const getDivisor = (num) => {
  if (num === 1) {
    return { 홀: 1 };
  }
  let obj = {};
  let arr = [1, num];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  arr.length % 2 ? (obj.홀 = num) : (obj.짝 = num);
  return obj;
};

function solution(left, right) {
  let sum = [];
  for (let i = left; i <= right; i++) {
    sum.push(getDivisor(i));
  }
  console.log(sum);
  let result = sum.reduce((acc, cur) => {
    return cur.짝 ? (acc += cur.짝) : (acc -= cur.홀);
  }, 0);
  return result;
}

let left = 0;
let right = 2;
let output = solution(left, right);
console.log(output);

// Number.isInteger(Math.sqrt(i))
// Number.isInteger -> 정수인지 판별
// Math.sqrt -> 제곱근
// 제곱근이 정수면 약수의 수가 홀수
