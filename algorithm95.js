// 효율성에서 통과하기 위해선, map과 이진탐색 활용
// 참고 https://mofari.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%9C%EC%9C%84-%EA%B2%80%EC%83%89-javascript

function solution(info, query) {
  var answer = [];
  let map = {};

  // map 만들기
  function makeMap(content, score, map, start) {
    // content는 arr인데 붙여줬다.
    let key = content.join('');
    // map안에 해당 key가 있는지 불린값으로 확인한다.
    let value = map[key];

    if (value) {
      // 있으면 추가해주고
      map[key].push(score);
    } else {
      // 없으면 만든다
      map[key] = [score];
    }

    // -를 이용한 조합 만들기
    // - ..., --...., ---...를 map에 넣는다.
    for (let i = start; i < content.length; i++) {
      // content가 arr이니깐 []을 한 번 볏겨낸다.
      let combineArr = [...content];
      combineArr[i] = '-';

      makeMap(combineArr, score, map, i + 1);
    }
  }

  // 이진탐색
  // 키가 같다면 키의 값은 점수이다.
  // 알맞는 점수를 이진탐색으로 찾는 것이다.
  function binarySearch(map2, key2, score2) {
    // map2에 key2가 있는지 여부를 불린값으로 보여준다.
    // 값이 있다면 그 값이 보인다. []
    let scoreArr = map2[key2];

    if (scoreArr) {
      let start = 0;
      let end = scoreArr.length;

      while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (scoreArr[mid] >= score2) {
          end = mid;
        } else if (scoreArr[mid] < score2) {
          start = mid + 1;
        }
      }
      return scoreArr.length - start;
    } else return 0;
  }

  // 내용들 모두 map안에 넣기
  for (let i = 0; i < info.length; i++) {
    let content = info[i].split(' ');
    let score = content.pop();

    makeMap(content, score, map, 0);
  }

  // 이진탐색을 위해 정렬하기
  for (let key in map) {
    map[key].sort((a, b) => a - b);
  }

  // 쿼리를 이진탐색 함수로 보낸다.
  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, '').split(' ');
    let score = Number(querys.pop());

    answer.push(binarySearch(map, querys.join(''), score));
  }

  return answer;
}

// function solution(info, query) {
//   var answer = [];
//   let inforTemp = [];
//   let queryTemp = [];

//   for (let idx in info) {
//     inforTemp.push(info[idx].split(' '));
//   }

//   for (let idx in query) {
//     queryTemp.push(query[idx].split(/ and | /));
//   }

//   // console.log(inforTemp);
//   // console.log(queryTemp);

//   for (let i = 0; i < queryTemp.length; i++) {
//     let infoCopy = inforTemp.slice();

//     let result = infoCopy.filter((el, idx) => {
//       if (el[0] === queryTemp[i][0] || queryTemp[i][0] === '-') {
//         if (el[1] === queryTemp[i][1] || queryTemp[i][1] === '-') {
//           if (el[2] === queryTemp[i][2] || queryTemp[i][2] === '-') {
//             if (el[3] === queryTemp[i][3] || queryTemp[i][3] === '-') {
//               if (
//                 Number(el[4]) >= Number(queryTemp[i][4]) ||
//                 queryTemp[i][4] === '-'
//               ) {
//                 return true;
//               }
//             }
//           }
//         }
//       }
//     }).length;

//     answer.push(result);
//   }

//   return answer;
// }

let info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
let query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];
let output = solution(info, query);
console.log(output);
