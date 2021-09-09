function solution(board) {
  var answer = 0;
  // 갑자기 헷갈렸네
  // 가로부터니깐 바로 length, 세로는 다음이니깐 [0].length
  let row = board.length;
  let col = board[0].length;

  // 한 변이 1이하이고, 그 안의 값이 1이면 1을 리턴한다.
  if (row < 2 || col < 2) {
    if (board[0][0] === 1) {
      return 1;
    }
  }

  // for문을 1부터 시작하면 4*4가 아닌 3*3만 본다
  // 바깥 대각선 상단, 왼쪽, 위의 값을 확인한다. (사각형의 왼쪽 모서리 위치파악)
  // 사각형의 오른쪽 아래 모서리에 가장 최값에 1을 더한다.
  // 1씩 더해 가장 큰 수가 정사각형의 한 변이다. (그만큼의 가로와 세로가 1로 채워져있다는 의미)
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] > 0) {
        let min = Math.min(
          board[i - 1][j - 1],
          board[i][j - 1],
          board[i - 1][j]
        );
        board[i][j] = min + 1;
      }
      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }

  return answer * answer;
}

let board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
let output = solution(board);
console.log(output);
