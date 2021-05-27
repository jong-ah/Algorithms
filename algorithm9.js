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
              let leftDistance =
                Math.abs(leftHand[0] - i) + Math.abs(leftHand[1] - j);
              let rightDistance =
                Math.abs(rightHand[0] - i) + Math.abs(rightHand[1] - j);
              if (leftDistance < rightDistance) {
                leftHand = [i, j];
                return 'L';
              } else if (leftDistance > rightDistance) {
                rightHand = [i, j];
                return 'R';
              } else if (leftDistance === rightDistance) {
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
