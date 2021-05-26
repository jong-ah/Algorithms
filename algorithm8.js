function solution(lottos, win_nums) {
  const answer = [];
  let minWin = 12;
  let maxWin = 12;

  // maxWin
  const sumArr = [...lottos, ...win_nums];
  const zeroOut = new Set(sumArr);
  zeroOut.delete(0); // 0도 없고, WIN숫자도 없는 틀린 숫자

  maxWin = maxWin - zeroOut.size;
  console.log('maxWin은 ', maxWin);
  answer.push(maxWin);

  // minWIn
  const zeroHas = lottos.filter((el) => el === 0);
  minWin = maxWin - zeroHas.length;
  console.log('minWin은 ', minWin);
  answer.push(minWin);

  // 순위
  const result = answer.map((el) => {
    if (el > 5) {
      return 1;
    } else if (el > 4) {
      return 2;
    } else if (el > 3) {
      return 3;
    } else if (el > 2) {
      return 4;
    } else if (el > 1) {
      return 5;
    }
    return 6;
  });

  console.log(result);
  return result;
}
let lottos = [45, 4, 35, 20, 3, 9];
let win_nums = [20, 9, 3, 45, 4, 35];
solution(lottos, win_nums);
