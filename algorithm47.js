function solution(dartResult) {
  let resultArr = dartResult.split('');

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] === '1' && resultArr[i + 1] === '0') {
      resultArr.splice(i, 2, 10);
    }
  }

  let answer = [];

  for (let i = 0; i < resultArr.length; i++) {
    if (typeof parseInt(resultArr[i]) === 'number') {
      if (resultArr[i + 1] === 'S') answer.push(parseInt(resultArr[i]));
      else if (resultArr[i + 1] === 'D') answer.push(Math.pow(resultArr[i], 2));
      else if (resultArr[i + 1] === 'T') answer.push(Math.pow(resultArr[i], 3));
    }

    if (['*', '#'].includes(resultArr[i])) {
      if (resultArr[i] === '*')
        if (answer.length === 1)
          answer.splice(answer.length - 1, 1, answer[answer.length - 1] * 2);
        else
          answer.splice(
            answer.length - 2,
            2,
            answer[answer.length - 2] * 2,
            answer[answer.length - 1] * 2
          );
      if (resultArr[i] === '#')
        answer.splice(answer.length - 1, 1, answer[answer.length - 1] * -1);
    }
  }

  return answer.reduce((acc, cur) => (acc += cur));
}

let dartResult = '1D2S#10S';
let output = solution(dartResult);
console.log(output);
