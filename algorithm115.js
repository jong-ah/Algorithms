'use strict';

// * https://programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

// TODO 점프와 순간 이동
/*********************************************************************** 
input으로 이동해야할 칸을 number로 준다.
output으로 순간이동이 가능한 아이언 슈트를 입고 건전지 사용량을 최소한 값을 number로 출력한다.
***********************************************************************/

// TODO 풀이의 흐름
/***********************************************************************
* 아이언 슈트는 한 칸 앞으로 점프할 때마다 건전지+1, 순간이동은 건전지x고 (현재까지 온 거리)x2를 이동한다.
1. 처음엔 순간이동만 하면 되지 않나라고 생각했다. 1칸 가고, 2, 4, 8, ...
1-1. 그러나 크게 순간이동한 중간에 이동해야할 값이 있을 경우 힘들어진다. (8, 16, 32... 도착지점이 24라면?)
2. 거리 값이 계속 2배로 크게 순간이동하면 좋다.
2-1. 이동할 거리가 홀수인 경우, 한 칸 점프해야한다. (x2는 홀수 못 간다)
2-2. 이동할 거리가 짝수라면, 2배로 순간이동한다.
3. 짝수여부를 확인하고 /2 or -1 를 했다.
4. dp문제라고 한다. 
4-1. top-down 방식 : 가장 먼저 호출하는 문제는 가장 큰 문제이기 때문에 큰 문제부터 방문 O(logN)
4-2. bottom-top방식 : 가장 작은 문제들부터 차례차례 답을 쌓아올려가는 방법 O(N)

* 참고자료
- [dp top-down 방식/bottom-top방식 ] (https://m.blog.naver.com/kks227/220777103650)
***********************************************************************/

// TODO 시간복잡도, 개선점
/***********************************************************************
 * 시간복잡도는 /2하므로 O(logN)일 것 같다.
 * 개선하게 된다면, 2진법을 활용하여 푼다면 조금 더 효율적이라는 점? 그런데 수학적 지식이 있어햘 응용이 가능할거같다.
 ***********************************************************************/

function solution(n) {
  let ans = 0;

  while (n > 0) {
    if (n % 2 > 0) {
      n--;
      ans++;
    } else {
      n /= 2;
    }
  }
  return ans;
}

let n = 5;
let output = solution(n);
console.log(output);