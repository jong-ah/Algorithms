function solution(x) {
  let str = x.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]);
  }
  return x % sum ? false : true;
}

let x = 10;
solution(x);
