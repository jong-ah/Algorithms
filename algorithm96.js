// 조합문제

function combination(arr, selectNum) {
  const results = [];

  // 코스요리가 1개일 경우, arr의 모든 음식이 다 들어감 A, B, C...
  if (selectNum === 1) {
    return arr.map((val) => [val]);
  }

  // 조합을 할 때 for문을 활용해도 된다.
  // fixed  선택값, index 순서, origin 전체 배열
  // rest fixed 제외한 나머지 값
  // attached로 조합한다.
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = combination(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
}

function solution(orders, course) {
  var answer = [];

  for (let i = 0; i < course.length; i++) {
    const result = {};
    let max = 0;

    orders.forEach((el) => {
      combination(el.split(''), course[i]).forEach((e) => {
        // ['A','B'] -> 'AB'로 합쳐진다.
        const str = e.sort().join('');

        // result key값이 있는지 없는지 여부
        // str로 만든 조합이 없으면 1 넣고, 있으면 1을 플러스한다.
        if (!isNaN(result[str])) {
          result[str] += 1;
          max = max < result[str] ? result[str] : max;
        } else {
          result[str] = 1;
        }
      });
    });

    // course[i]의 result 중에 max가 있다면
    // result의 조합요소가 2개 이상 선택 받았다면, 그 조합요리를 answer에 넣는다.
    if (max >= 2) {
      for (const [key, value] of Object.entries(result)) {
        if (value >= max) {
          answer.push(key);
        }
      }
    }
  }

  return answer.sort();
}

let orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
let course = [2, 3, 4];
let output = solution(orders, course);
console.log(output);
