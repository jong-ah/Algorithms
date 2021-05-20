function solution(a, b) {
  const multiArr = [];

  // a, b는 둘 다 같은 수의 배열이고 같은 인덱스끼리 곱해야하네.
  for (let i = 0; i < a.length; i++) {
    let multi = 0;
    multi = a[i] * b[i];
    multiArr.push(multi);
  }
  console.log(multiArr);

  const answer = multiArr.reduce((sum, el) => {
    sum = sum + el;
    return sum;
  });
  console.log(answer);
  return answer;
}

let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
solution(a, b);
