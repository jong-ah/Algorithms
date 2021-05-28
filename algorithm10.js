function solution(N, stages) {
  var stopStep = [];
  var passUser = [stages.length];
  var percent = [];
  var order = {};
  var answer = [];

  // 멈춘 단계에 있는 사람들 수
  for (let i = 1; i <= N + 1; i++) {
    let stop = stages.filter((el) => el === i).length;
    stopStep.push(stop);
  }
  console.log(stopStep);

  // 그 단계를 거쳐간 사람들
  for (let i = 0; i <= N; i++) {
    let pass = passUser[passUser.length - 1] - stopStep[i];
    passUser.push(pass);
  }
  console.log(passUser);

  // 실패율 구하기
  for (let i = 0; i < N; i++) {
    let perNum = stopStep[i] / passUser[i];
    if (isNaN(perNum) === true) {
      perNum = 0;
    }
    percent.push(perNum);
    order[i + 1] = percent[i];
  }
  console.log(percent);
  console.log(order);

  // 실패율 내림차순
  let sort = percent.sort((a, b) => b - a);
  console.log(sort);

  // 실패율과 order순 맞추기
  for (let i = 0; i < N; i++) {
    for (let key in order) {
      if (order[key] === percent[i]) {
        answer.push(Number(key));
        order[key] = 'false';
      }
    }
  }
  console.log(answer);

  return answer;
}
let N = 5;
let stages = [2, 1, 2, 4, 2, 4, 3, 3];
solution(N, stages);
