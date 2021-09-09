function solution(expression) {
  var answer = [];
  let cases = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  // 아래는 숫자만 나오고 ()를 해줘야 연산자도 나온다.
  // let temp = expression.temp(/\D/);
  
  for (let i = 0; i < cases.length; i++) {
    // 반복문 안에 넣어줘야 여러번 계산된다.
    let temp = expression.split(/(\D)/);
    for (let j = 0; j < 3; j++) {
      while (temp.includes(cases[i][j])) {
        let idx = temp.indexOf(cases[i][j]);
        console.log(idx)
        // 연산자 앞의 숫자, 연산자, 연산자 뒤의 숫자 이렇게 3개를 없애고 계산한다.
        // splice는 그 범위를 삭제하고 새로운 것으로 교체한다.
        // slice는 그 범위만 빼온다.(연산자 앞의 숫자, 연산자, 연산자 뒤의 숫자)
        // slice로 빼온것을 eval로 계산한다. eval은 문자열은 연산할 수 있다.
        // temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join('')));

        // eval은 해커 당할 위험성이 있다고 쓰지말라고 한다. (mdn 문서)
        // new Function으로 변경한다. 
        // 함수이므로 실행되기 위해선 ()을 끝에 넣어야한다.
        temp.splice(idx - 1, 3, (new Function(`return ${temp.slice(idx-1, idx+2).join('')}`))());
        console.log(temp)
      }
    }
    answer.push(Math.abs(...temp));
  }
console.log(answer)
  return Math.max(...answer);
}


let expression = '100-200*300-500+20';
let output = solution(expression);
console.log(output);
