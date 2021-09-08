// 5이하 단어로 수록하는거니깐 5진수로 해야한다.
// 그러나 5진수는 0,1,2,3,4의 수가 나온다. 그러므로 5까지 커버할 수 있는 6진수로 한다.
// 6진수로 하고 0을 뺀다. 
// 0을 넣을 경우, Sort가 했을 때 01,02이런 경우가 없어서 AE, AI가 안 나온다.
// 진수하는 이유는 리소스를 만들어서 word가 리소스 중에 몇 번째인지 확인하기 위함이다.

function solution(word) {
  var answer = [];

  for (let i = 0; i < 10000; i++) {
    answer.push(i.toString(6));
  }
  // console.log(answer)

  answer = answer
    .filter((el) => {
      return el.indexOf(0) === -1 && el.length < 6 ? true : false;
    })
    .map((el) => {
      return el
        .replace(/1/g, 'A')
        .replace(/2/g, 'E')
        .replace(/3/g, 'I')
        .replace(/4/g, 'O')
        .replace(/5/g, 'U');
    })
    .sort();

    // console.log(answer)

  return answer.indexOf(word) + 1;
}

let word = 'AAAAE';
let output = solution(word);
console.log(output);
