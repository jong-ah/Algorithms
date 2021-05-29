function solution(arr) {
  let answer = arr.reduce((acc, cur) => (acc += cur)) / arr.length;

  console.log(answer);
  return answer;
}

let arr = [1, 2, 3, 4];
solution(arr);
