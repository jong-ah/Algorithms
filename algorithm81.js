function solution(n) {
  var answer = '';

  while (n > 0) {
    let remainder = n % 3;
    n = parseInt(n / 3);

    if (remainder === 0) {
      answer = '4' + answer;
      n = n - 1;
    } else {
      answer = remainder + answer;
    }
  }
  return answer;
}

let n = 10;
let output = solution(n);
console.log(output);
