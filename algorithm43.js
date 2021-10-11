// * https://programmers.co.kr/learn/courses/30/lessons/12982

// 211011
// 프로그래머스 레벨1 예산
// input으로 부서별로 신청한 금액이 들어있는 배열, 예산을 받는다.
// output으로 물품을 지원받을 수 있는 부서의 최대 수 number를 출력한다.  
// 시간복잡도 sort는 O(NlogN), while은 최대 O(N) N:d.length => O(NlogN + N)
// 개선점은 기본적으로 sort는 써야할 것 같고, while을 for문, forEach, map을 활용하여 풀 수도 있지만 문제가 어렵지 않고, 코드 이해가 쉽기 때문에 개선점은 없어 보인다. 

function solution(d, budget) {
    var answer = 0;
    
    d.sort((a,b)=>a-b);
    
    while(budget >= 0) {
        budget -= d.shift();
        answer++;
    }
    return budget === 0 ? answer : answer-1;
}

/* 210607
function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum = sum + d[i];
    if (sum > budget) return i;
  }

  if (sum <= budget) return d.length;
}
*/

let d = [1, 2, 3];
let budget = 10;
let output = solution(d, budget);
console.log(output);
