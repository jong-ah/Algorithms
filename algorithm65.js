'use strict';

// * https://programmers.co.kr/learn/courses/30/lessons/42746

// TODO 가장 큰 수 이해하기
/***********************************************************************
  [3, 30, 34, 5, 9]의 배열을 받아 요소들로 가장 큰 수를 만들어야 한다.
  [9, 5, 34, 3, 30]순이 가장 큰 수를 만들 수 있다.
***********************************************************************/

// TODO 수도코드
/***********************************************************************
 // ? 문자열로 만들어 앞,뒤로 다르게 더한 두수의 크기를 비교하고 큰 것을 앞으로 정렬한다.
 // 처음엔 숫자를 내림차순으로 정렬하고, 일의 자리 수로 정렬해서 [34, 3, 30] 만들었다.
 // for을 돌면서 앞, 뒤로 다르게 더한 두수의 크기를 비교했다.
 // 두번째 수인 j는 j의 값이 배열의 길이가 되었을 때, return으로 정렬을 끝낸다.
 // ! 질문하기에 올라온 테스트케이스로 '열심히_고민하고'를 통과했으나 본편은 통과 못 했다. 
 // * 정렬 많이 썼는데 아직도 잘 몰랐다..
***********************************************************************/

const 열심히_고민하고 = () => {
  function solution(numbers) {
    let answer = numbers.map(String).sort((a, b) => b - a);
    answer.sort((a, b) => b[0] - a[0]);

    const result = [];
    let j = 1;

    for (let i = 0; i < answer.length - 1; i++) {
      if (answer[i] + answer[j] >= answer[j] + answer[i]) {
        result.push(answer[i]);
        if (j === answer.length - 1) result.push(answer[j]);
      } else {
        result.push(answer[j]);
        if (j === answer.length - 1) result.push(answer[i]);
      }
      j++;
    }
    // console.log(result);
    return result[0] ? result.join('') : '0';
  }

  // let numbers = [0, 0, 0, 0, 0, 0];
  // let numbers = [1, 112];
  // let numbers = [10, 101];
  let numbers = [3, 30, 34, 5, 9];
  // let numbers = [6, 10, 2];
  let output = solution(numbers);
  console.log(output);
};

열심히_고민하고();

/***********************************************************************/

const 정답은_이것 = () => {
  function solution(numbers) {
    let result = numbers
      .map(String)
      .sort((a, b) => b + a - (a + b))
      .join('');

    // console.log(result);
    return result[0] ? result : '0';
  }

  // let numbers = [0, 0, 0, 0, 0, 0];
  // let numbers = [1, 112];
  // let numbers = [10, 101];
  let numbers = [3, 30, 34, 5, 9];
  // let numbers = [6, 10, 2];
  let output = solution(numbers);
  console.log(output);
};

정답은_이것();
