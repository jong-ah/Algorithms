function solution(progresses, speeds) {
  var answer = [];
  let day = 0;

  // speeds(or progresses) 값이 있는 동안
  while (speeds.length) {
    // 각 speeds의 값을 더해준다.
    for (let i = 0; i < speeds.length; i++) {
      progresses[i] += speeds[i];
    }

    // 첫번째 기능이 개발 완료되었다면, 배포한다.
    // while이므로 배포 후 다음것도 완료되었으면 바로 배포된다.
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      day++;
    }

    // 하루에 배포된 수가 0이상이라면, answer에 넣고 초기화한다.
    if (day > 0) {
      answer.push(day);
      day = 0;
    }
  }

  return answer;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
let output = solution(progresses, speeds);
console.log(output);
