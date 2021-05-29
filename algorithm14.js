// 유클리드 호제법 -> 큰수%작은수, 값이 0일 때 리턴
function solution1(n, m) {
  const arr = [n, m];

  arr.sort((a, b) => a - b);

  const 최대공약수 = (arr) => {
    return arr.reduce((a, b) => {
      if (b % a === 0) return a;
      return 최대공약수([b % a, a]);
    });
  };

  const 최소공배수 = (arr) => {
    return arr.reduce((a, b) => (a * b) / 최대공약수(arr));
  };

  console.log('최대공약수', 최대공약수(arr), ',최소공배수', 최소공배수(arr));
  return [최대공약수(arr), 최소공배수(arr)];
}

// 유클리드 호제법 변형 -> 작은수%큰수, 큰수가 0일 때 리턴
function solution2(n, m) {
  const arr = [n, m];

  arr.sort((a, b) => a - b);

  const 최대공약수 = (arr) => {
    return arr.reduce((a, b) => {
      if (b === 0) return a;
      return 최대공약수([b, a % b]);
    });
  };

  const 최소공배수 = (arr) => {
    return arr.reduce((a, b) => (a * b) / 최대공약수(arr));
  };

  console.log('최대공약수', 최대공약수(arr), ',최소공배수', 최소공배수(arr));
  return [최대공약수(arr), 최소공배수(arr)];
}

let n = 2;
let m = 5;
solution1(n, m);
solution2(n, m);
