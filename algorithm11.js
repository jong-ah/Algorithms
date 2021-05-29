function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
  console.log(answer);
  return answer;
}

let arr = [1, 1, 3, 3, 0, 1, 1];
solution(arr);
