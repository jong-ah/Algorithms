// 0(n)
function solution(n) {
  let count = 0;
  let prime = [];

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i - 1; j++) {
      if (i % j === 0) {
        count++;
        break;
      }
    }
    if (count === 0) prime.push(i);
    count = 0;
  }
  console.log(prime);
  return prime.length;
}

// O(N^1/2) 에라토스테네스의 체
// 제곱근 확인(+자신 더하기)하고 그값을 빼면 남은 수가 소수이다.
function solution2(n) {
  let prime = new Array(n).fill(true);
  prime[0] = false;
  for (let i = 2; i ** 2 <= n; i++) {
    if (prime[i - 1] === true) {
      for (let j = i ** 2; j <= n; j += i) {
        prime[j - 1] = false;
      }
    }
  }
  console.log(prime);
  return prime.filter((el) => el).length;
}

// new Set() 에라토스테너스의 체
// 짝수 제외한 배열 체크 (2만 들어감)
function solution3(n) {
  const s = new Set();
  // 짝수는 소수가 아니니깐 뺀다
  for ( let i = 3; i <= n; i+= 2){
    s.add(i) // true 배열 역할
  }
  s.add(2) // 유일한 짝수 소수
  for ( let j = 3; j**2 <= n; j++ ) { // j제곱이 아니라 n의 제곱근(Math.sqrt(n))을 조건식에 넣기도 함 
    if (s.has(j)){
      for (let k=j**2; k <= n; k+= j ) {
        s.delete(k) // false가 아닌 바로 삭제
      }
    }
  }
  return s.size;
}

let n = 10;
solution(n);
