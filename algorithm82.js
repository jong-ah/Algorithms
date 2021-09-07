// () 둘이 쌍으로 있어야한다. 전체 수가 짝수여야 한다. 각 수가 동일하다.
// () 열린 것이 있으면 닫힌 것이 있어야 한다.
// 처음에 )이 올 수 없고, 끝에 ( 올 수 없다.
// 5, 11만 틀리다니 => ()))((() 이걸 해결해야해
// closeNum은 openNum보다 커질 수 없다.

function matchStr(s) {
  // let temp = [hasClose, openNum, closeNum]
  let openNum = 0;
  let closeNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openNum++;
    } else {
      closeNum++;

      if (openNum < closeNum) {
        return [false];
      }
    }
  }
  return [true, openNum, closeNum];
}

function solution(s) {
  let sum = s.length;
  let temp = matchStr(s);

  if (sum % 2 !== 0) {
    return false;
  } else if (s[0] === ')' || s[sum - 1] === '(') {
    return false;
  } else if (temp[0] !== true) {
    return false;
  } else if (temp[1] !== temp[2]) {
    return false;
  }

  return true;
}

// let s = '()()';
let s = '()))((()';
let output = solution(s);
console.log(output);
