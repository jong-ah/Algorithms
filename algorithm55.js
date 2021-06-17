function solution(arr) {
  while (arr.length >= 2) {
    let a = arr.pop();
    let b = arr.pop();
    arr.unshift(getLCM(a, b));
  }

  return arr[0];
}

// 유클리드 호제법 -> 큰수%작은수, 값이 0일 때 리턴
const getLCM = (a, b) => {
  let arr = [a, b];
  arr.sort((a, b) => a - b);

  const gcd = (arr) => {
    return arr.reduce((a, b) => {
      if (b % a === 0) return a;
      return gcd([b % a, a]);
    });
  };

  const lcm = (arr) => {
    return arr.reduce((a, b) => (a * b) / gcd(arr));
  };

  console.log('gcd', gcd(arr), ',lcm', lcm(arr));
  return lcm(arr);
};

let arr = [2, 3, 4];
let output = solution(arr);
console.log(output);
