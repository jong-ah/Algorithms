function solution(numbers, hand) {
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];
  const touchPad = [
    ['L', 'M', 'R'],
    ['L', 'M', 'R'],
    ['L', 'M', 'R'],
    ['L', 'M', 'R'],
  ];

  let leftHand = [3, 0];
  let rightHand = [3, 2];

  const answer = numbers
    .map((num) => {
      for (let i = 0; i < keyPad.length; i++) {
        for (let j = 0; j < keyPad[i].length; j++) {
          if (num === keyPad[i][j]) {
            if (touchPad[i][j] === 'L') {
              leftHand = [i, j];
              return 'L';
            } else if (touchPad[i][j] === 'R') {
              rightHand = [i, j];
              return 'R';
            } else if (touchPad[i][j] === 'M') {
              const TDLR = [
                [i - 1, j],
                [i + 1, j],
                [i, j - 1],
                [i, j + 1],
              ];
              const leftCheck = TDLR.filter(
                (el) => el.toString() == leftHand.toString()
              );
              const rightCheck = TDLR.filter(
                (el) => el.toString() == rightHand.toString()
              );
              // num이 왼쪽 상하좌우에 속한다면
              if (leftCheck.length > rightCheck.length) {
                leftHand = [i, j];
                return 'L';
                //  nums이 오른쪽 상하좌우에 속한다면
              } else if (leftCheck.length < rightCheck.length) {
                rightHand = [i, j];
                return 'R';
                // nums가 상하좌우 모두에 안 속한다면
              } else if (
                leftCheck.length === rightCheck.length &&
                leftCheck.length === 0
              ) {
                // 행을 기준으로 가까운 쪽에 속함
                if (Math.abs(i - leftHand[0]) < Math.abs(i - rightHand[0])) {
                  leftHand = [i, j];
                  return 'L';
                } else if (
                  Math.abs(i - leftHand[0]) > Math.abs(i - rightHand[0])
                ) {
                  rightHand = [i, j];
                  return 'R';
                } else if (
                  // 행이 같다면 hand로 정함
                  Math.abs(i - leftHand[0]) === Math.abs(i - rightHand[0])
                ) {
                  if (hand === 'left') {
                    leftHand = [i, j];
                    return 'L';
                  } else if (hand === 'right') {
                    rightHand = [i, j];
                    return 'R';
                  }
                }
                // nums가 상하좌우 모두에 속한다면 hand로 정함
              } else if (leftCheck.length === rightCheck.length) {
                if (hand === 'left') {
                  leftHand = [i, j];
                  return 'L';
                } else if (hand === 'right') {
                  rightHand = [i, j];
                  return 'R';
                }
              }
            }
          }
        }
      }
    })
    .reduce((sum, el) => (sum = sum + el));
    
  return answer;
}

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = 'left';
solution(numbers, hand); // "LRLLRRLLLRR"
