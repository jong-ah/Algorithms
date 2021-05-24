function solution(board, moves) {
  let answer = 0;
  const stack = [];
  let newMoves = moves.map((el) => el - 1);

  while (newMoves.length > 0) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][newMoves[0]] !== 0) {
        stack.push(board[i][newMoves[0]]);
        board[i][newMoves[0]] = 0;
        newMoves.shift();

        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.splice(-2);
          answer = answer + 2;
        }

        break;
      } else if (board[board.length - 1][newMoves[0]] === 0) {
        newMoves.shift();
      }
    }
  }

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
solution(board, moves);
