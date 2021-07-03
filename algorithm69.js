'use strict';

// * https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

// TODO 위장 이해하기
/***********************************************************************
  스파이가 위장을 하는데 1개 이상의 옷을 입는다.
  2개 이상 입을 경우, 같은 종류의 옷을 2개 이상 입지 않고 다른 종류를 겹쳐 입는다.
  3개의 종류가 있으면 1개, 2개 입을 때도 있고, 3개를 다 입을 때도 있다. 
  4개의 종류가 있으면 1개, 2개, 3개 입을 때도 있고 4개를 다 입을 때도 있다. 
  // ! 수학 공식있다. 
***********************************************************************/

// TODO 수도코드
/***********************************************************************
 // ? 1. 종류별로 옷을 분류해주는 hash 객체를 만든다.
 // ? 2. 종류별 옷 개수를 담아 놓은 dic 배열을 만든다.
 // ? 3. (종류1 옷 개수 + 1) * (종류2 옷 개수 + 1) * ... * (종류 마지막 옷 개수 + 1) - 1(안 입을 때) 공식으로 푼다.
 // 수학 공식이 있을거라 생각했는데 역시나 질문하기로 통해 수학 공식을 봤다.
 // hash와 dic을 따로 만들었지만 한 번에 만들어도 될 것 같다.
***********************************************************************/

const 처음엔 = () => {
  function solution(clothes) {
    const hash = {};
    clothes.map((clothe) => {
      hash[clothe[1]]
        ? hash[clothe[1]].push(clothe[0])
        : (hash[clothe[1]] = [clothe[0]]);
    });

    let dic = [];
    for (let key in hash) {
      let num = 0;
      for (let i = 0; i < hash[key].length; i++) {
        num++;
      }
      dic.push(num);
    }

    let sum = dic.reduce((a, c) => {
      return (a = a * (c + 1));
    }, 1);

    return sum - 1;
  }

  let clothes = [
    ['1', '머리'],
    ['2', '머리'],
    ['3', '머리'],
    ['4', '상의'],
    ['5', '상의'],
    ['6', '하의'],
  ];
  let output = solution(clothes);
  console.log(output); // 23
};

처음엔();

/***********************************************************************/

const 짧게_해볼까 = () => {
  function solution(clothes) {
    const hash = {};
    clothes.map((clothe) => (hash[clothe[1]] = (hash[clothe[1]] || 0) + 1));

    let sum = 1;
    for (let key in hash) sum *= hash[key] + 1;

    return sum - 1;
  }

  let clothes = [
    ['1', '머리'],
    ['2', '머리'],
    ['3', '머리'],
    ['4', '상의'],
    ['5', '상의'],
    ['6', '하의'],
  ];
  let output = solution(clothes);
  console.log(output); // 23
};

짧게_해볼까();
