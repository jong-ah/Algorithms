function solution(strings, n) {
  let obj = {},
    sort = [],
    answer = [];

  strings.sort();
  
  for (let i = 0; i < strings.length; i++) {
    obj[strings[i]] = strings[i][n];
    sort.push(strings[i][n]);
  }
  console.log(obj);
  sort.sort();

  for (let i = 0; i < strings.length; i++) {
    for (let key in obj) {
      if (sort[i] === obj[key]) {
        answer.push(key);
        obj[key] = false;
      }
    }
  }
  console.log(answer);
  return answer;
}

let strings = ['abce', 'abcd', 'cdx'];
let n = 1;
solution(strings, n);
