// 문자열에서 w가 몇개인지 확인하여 승률을 구한다.
// 승률이 동점일 경우, 무거운 복서를 이긴 횟수를 확인한다
// 이긴 횟수도 동점일 경우, 몸무게를 확인한다.

function solution(weights, head2head) {
  var answer = [];

  head2head.map((el, idx) => {
    let winCount = 0;
    let heavyWin = 0;
    let lostCount = 0;

    for (let i = 0; i < el.length; i++) {
      if (el[i] === 'W') {
        if (weights[i] > weights[idx]) {
          heavyWin++;
        }
        winCount++;
      } else if (el[i]==='L'){
        lostCount++;
      }
    }

    // console.log(winCount)
    // console.log(heavyWin)

    answer[idx] = [idx, winCount/(winCount+lostCount), heavyWin, weights[idx]];
  });

  // console.log(answer);

  answer.sort((a, b) => {
    // 이긴 횟수 많다면
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      // 무거운 몸무게를 이겼다면
      if (a[2] < b[2]) return 1;
      else if (a[2] > b[2]) return -1;
      else {
        // 몸무게가 많다면
        if (a[3] < b[3]) return 1;
        else if (a[3] > b[3]) return -1;
        else {
          // 번호가 작다면
          if (a[0] > b[0]) return 1;
          else if (a[0] < b[0]) return -1;
          else return 0;
        }
      }
    }
  });

  return answer.map((el) => el[0] + 1);
}

// let weights = [50, 82, 75, 120];
// let head2head = ['NLWL', 'WNLL', 'LWNW', 'WWLN'];
// let weights = [145, 92, 86];
// let head2head = ['NLW', 'WNL', 'LWN'];
let weights = [60, 70, 60];
let head2head = ['NNN', 'NNN', 'NNN'];
let output = solution(weights, head2head);
console.log(output);
