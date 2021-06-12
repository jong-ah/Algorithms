function solution(answers) {
  const first = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) score1++;
    if (answers[i] === second[i % 8]) score2++;
    if (answers[i] === third[i % 10]) score3++;
  }

  const obj = { 1: score1, 2: score2, 3: score3 };
  const bigger = Math.max(score1, score2, score3);
  const answer = [];

  for (let i = 1; i < 4; i++) {
    if (bigger <= obj[`${i}`]) answer.push(i);
  }
  return answer;
}
let answers = [1, 2, 3, 1, 2];
let output = solution(answers);
console.log(output);
