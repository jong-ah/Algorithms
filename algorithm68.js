'use strict';

// * https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

// TODO 베스트앨범 이해하기
/***********************************************************************
  총 재생 수가 많은 장르 순으로, 재생 수가 많은 순으로 장르 당 고유 번호 2개씩 리턴합니다.
  장르 : ["classic", "pop", "classic", "classic", "pop"]
  재생 수 : [500, 600, 150, 800, 2500]
  총 재생 수가 많은 장르 순 : ["pop", "classic"]
  재생 수가 많은 순으로 장르 당 고유 번호 2씩 : [4, 1, 3, 0]
  // ! 장르가 2개 이상이다. 2개만 있는 것이 아니다.
  // ! 장르 당 고유번호가 1개일 때는 1개만 리턴하면 된다.
***********************************************************************/

// TODO 수도코드
/***********************************************************************
 // ? 1. 총 재생 수가 많은 순으로 장르 배열은 만든다.
 // 첫번째는 배열을 사용해서 길고, 두,세번째는 객체와 map을 사용하여 효율성있게 만들었다.
 // ? 2. 재생수와 장르가 모두 있는 배열을 만들고, 재생수가 많은 순으로 정렬한다. 
 // ? 3. 정렬한 후, 장르와 같은 것의 인덱스를 새로운 배열에 넣고, 새로운 배열의 수가 2개 넘지 않도록 하여 리턴한다.
 // 두,세번째는 sort, map, filter 안에 if조건문을 잘 사용하였다.
 // 두번째는  hash라는 전체 정보가 담긴 배열을 기준으로 코드 진행되며 보조적인 객체를 잘 사용했다.
 // 세번째는 총 재생 수가 많은 장르 배열을 기준으로 코드 진행했으며, reduce 배열 안에서 다른 객체를 추가로 만든다는 것인 신기했다.
***********************************************************************/

const 배열로_정보를_적게담아 = () => {
  function solution(genres, plays) {
    // 잘 팔리는 장르 순으로 정리하기
    // 객체로 하면 더 편할텐데 배열이 익숙해 배열로 멀리 돌아감
    let set = [...new Set(genres)].map((el) => [el, 0]).flat();

    for (let i = 0; i < genres.length; i++) {
      let index = set.indexOf(genres[i]);
      set[index + 1] += plays[i];
    }

    let num = set
      .slice()
      .filter((el) => typeof el === 'number')
      .sort((a, b) => b - a);

    let bestGen = [];

    for (let i = 0; i < num.length; i++) {
      bestGen.push(set[set.indexOf(num[i]) - 1]);
    }

    // 인덱스 넣기
    let all = [];

    for (let i = 0; i < genres.length; i++) {
      all.push([genres[i], plays[i]]);
    }

    let sorted = all.slice().sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let i = 0; i < bestGen.length; i++) {
      let result2 = [];
      for (let j = 0; j < sorted.length; j++) {
        if (sorted[j][0] === bestGen[i]) {
          result2.push(all.indexOf(sorted[j]));
        }
      }
      result.push(result2.slice(0, 2));
    }

    return result.flat();
  }

  let genres = [
    'classic',
    'pop',
    'classic',
    'classic',
    'jazz',
    'pop',
    'Rock',
    'jazz',
  ];
  let plays = [500, 600, 150, 800, 1100, 2500, 100, 1000];
  let output = solution(genres, plays); //[ 5, 1, 4, 7, 3, 0, 6
  console.log(output);
};

배열로_정보를_적게담아();

/***********************************************************************/

const 객체로_정보를_많이담아 = () => {
  function solution(genres, plays) {
    const hash = genres.map((genre, i) => {
      return { index: i, genre: genre, plays: plays[i] };
    });

    const sum = {};
    hash.forEach((el) => {
      sum[el.genre] === undefined
        ? (sum[el.genre] = el.plays)
        : (sum[el.genre] = sum[el.genre] + el.plays);
    });

    let over = {};
    const result = hash
      .sort((a, b) => {
        if (a.genre !== b.genre) return sum[b.genre] - sum[a.genre];
        if (a.plays !== b.plays) return b.plays - a.plays;
      })
      .filter((el) => {
        if (over[el.genre] >= 2) return false;
        over[el.genre] = (over[el.genre] || 0) + 1;
        return true;
      })
      .map((el) => el.index);

    return result;
  }

  let genres = [
    'classic',
    'pop',
    'classic',
    'classic',
    'jazz',
    'pop',
    'Rock',
    'jazz',
  ];
  let plays = [500, 600, 150, 800, 1100, 2500, 100, 1000];
  let output = solution(genres, plays); //[5, 1, 4, 7, 3, 0, 6]
  console.log(output);
};

객체로_정보를_많이담아();

/***********************************************************************/

const map이렇게사용하는구나 = () => {
  function solution(genres, plays) {
    const count = {};
    let answer = [];
    const acc = genres.reduce((a, c, i) => {
      count[c] ? count[c].push([i, plays[i]]) : (count[c] = [[i, plays[i]]]);
      return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
    }, new Map());

    console.log(acc);
    console.log([...acc]);
    console.log(count);

    [...acc]
      .sort((a, b) => b[1] - a[1])
      .map((v) => {
        answer = answer.concat(
          count[v[0]].sort((c, d) => d[1] - c[1]).slice(0, 2)
        );
      });
    return answer.map((v) => v[0]);
  }

  let genres = [
    'classic',
    'pop',
    'classic',
    'classic',
    'jazz',
    'pop',
    'Rock',
    'jazz',
  ];
  let plays = [500, 600, 150, 800, 1100, 2500, 100, 1000];
  let output = solution(genres, plays); //[5, 1, 4, 7, 3, 0, 6]
  console.log(output);
};

map이렇게사용하는구나();
