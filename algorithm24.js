function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0] - 1;
    const end = commands[i][1];
    const select = commands[i][2] - 1;

    answer.push(array.slice(start, end).sort((a, b) => a - b)[select]);
  }
  console.log(answer);
  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
solution(array, commands);
