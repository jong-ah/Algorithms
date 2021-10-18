/*
https://programmers.co.kr/learn/courses/30/lessons/87389

풀이 
: 주어진 숫자의 나머지 1이 리턴되는 최소 나머지값을 리턴한다.
: 홀짝으로 나누어야 시간복잡도가 더 좋아서 나누었다.
시간복잡도
: O(n/2)
개선점
: 함수로 따로 만드는게 덜 중복코드처럼 보였을 것 같다. (매개변수 i할당값, n)
*/

function solution(n) {
  var answer = 0;

  if (n % 2 === 0) {
    for (let i = 3; i < n; i += 2) {
      if (n % i === 1) return (answer = i);
    }
  } else {
    for (let i = 2; i < n; i += 2) {
      if (n % i === 1) return (answer = i);
    }
  }

  return answer;
}
