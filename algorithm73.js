'use strict';

// * https://programmers.co.kr/learn/courses/30/lessons/12981

// TODO 영어 끝말잇기 이해하기
/***********************************************************************
  같은 단어를 말하면 [틀린 사람, 차례]를 리턴한다.
  틀린 단어를 말하면 [틀린 사람, 차례]를 리턴한다.
  문제 없으면 [0, 0]을 리턴한다. 
***********************************************************************/

// TODO 수도코드
/***********************************************************************
 // ? 1. 같은 단어를 말하는 것을 확인하기 위해 set을 활용했다. 
 // 첫번째 단어는 틀리지 않으므로 미리 넣어놓았고, 사람과 차례 또한 1부터 시작하므로 기본값을 1로 잡았다.
 // ? 2. person이 총 사람의 수를 넘어가면 처음 사람이 다시 하므로 1로 재할당하고, round++ 했다.
 // ? 3. 같은 단어를 말한 것이 확인되거나 틀린 단어를 말했다면 [person, round]로 리턴한다.
 // ? 4. 문제없이 끝까지 다 말했을 경우 틀린 사람이 없으므로 [0,0]으로 리턴한다.
 // ! person, round를 선언하지 않고, [i % (n + 1), parseInt(i / n + 1)]로 풀면 코드가 간결해진다.
***********************************************************************/

// person, round 변수를 선언했을 때
const solution1 = () => {
  function solution(n, words) {
    let person = 1;
    let round = 1;
    const word = new Set([words[0]]);

    for (let i = 1; i < words.length; i++) {
      let pre = words[i - 1][words[i - 1].length - 1];
      let now = words[i][0];

      person++;

      if (person === n + 1) {
        person = 1;
        round++;
      }

      // 같은 단어를 말했을 때
      if (!word.has(words[i])) word.add(words[i]);
      else return [person, round];

      // 문제 없을 때
      if (i === words.length - 1) return [0, 0];

      // 틀린 단어를 말했을 때
      if (pre !== now) return [person, round];
    }
  }

  let n = 2;
  let words = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];
  let output = solution(n, words);
  console.log(output);
};

solution1();
/******* 테스트 *******
테스트 1 〉	통과 (0.12ms, 30.1MB)
테스트 2 〉	통과 (0.12ms, 29.6MB)
테스트 3 〉	통과 (0.09ms, 30.1MB)
테스트 4 〉	통과 (0.12ms, 30MB)
테스트 5 〉	통과 (0.14ms, 29.7MB)
테스트 6 〉	통과 (0.11ms, 30MB)
테스트 7 〉	통과 (0.12ms, 29.9MB)
테스트 8 〉	통과 (0.09ms, 29.9MB)
테스트 9 〉	통과 (0.12ms, 29.9MB)
테스트 10 〉	통과 (0.13ms, 30MB)
테스트 11 〉	통과 (0.14ms, 30MB)
테스트 12 〉	통과 (0.14ms, 29.8MB)
테스트 13 〉	통과 (0.10ms, 30MB)
테스트 14 〉	통과 (0.10ms, 30.2MB)
테스트 15 〉	통과 (0.11ms, 29.8MB)
테스트 16 〉	통과 (0.10ms, 29.7MB)
테스트 17 〉	통과 (0.10ms, 29.9MB)
테스트 18 〉	통과 (0.11ms, 29.9MB)
테스트 19 〉	통과 (0.10ms, 30MB)
테스트 20 〉	통과 (0.12ms, 30.1MB)
*******************/

/***********************************************************************/

// 변수 선언없이
const solution2 = () => {
  function solution(n, words) {
    const word = new Set([words[0]]);

    for (let i = 1; i < words.length; i++) {
      let pre = words[i - 1][words[i - 1].length - 1];
      let now = words[i][0];

      // 같은 단어를 말했을 때
      if (!word.has(words[i])) word.add(words[i]);
      else return [(i % n) + 1, parseInt(i / n + 1)];

      // 문제 없을 때
      if (i === words.length - 1) return [0, 0];

      // 틀린 단어를 말했을 때
      if (pre !== now) return [(i % n) + 1, parseInt(i / n + 1)];
    }
  }

  let n = 2;
  let words = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];
  let output = solution(n, words);
  console.log(output);
};

solution2();
/******* 테스트 *******
테스트 1 〉	통과 (0.08ms, 29.9MB)
테스트 2 〉	통과 (0.11ms, 30MB)
테스트 3 〉	통과 (0.09ms, 30MB)
테스트 4 〉	통과 (0.12ms, 30MB)
테스트 5 〉	통과 (0.53ms, 29.9MB)
테스트 6 〉	통과 (0.12ms, 29.9MB)
테스트 7 〉	통과 (0.12ms, 29.8MB)
테스트 8 〉	통과 (0.10ms, 29.7MB)
테스트 9 〉	통과 (0.11ms, 30.1MB)
테스트 10 〉	통과 (0.15ms, 30MB)
테스트 11 〉	통과 (0.15ms, 30MB)
테스트 12 〉	통과 (0.13ms, 30.1MB)
테스트 13 〉	통과 (0.10ms, 30MB)
테스트 14 〉	통과 (0.10ms, 30MB)
테스트 15 〉	통과 (0.09ms, 30MB)
테스트 16 〉	통과 (0.10ms, 30.1MB)
테스트 17 〉	통과 (0.07ms, 30MB)
테스트 18 〉	통과 (0.11ms, 29.9MB)
테스트 19 〉	통과 (0.10ms, 29.9MB)
테스트 20 〉	통과 (0.16ms, 29.9MB)
*******************/
