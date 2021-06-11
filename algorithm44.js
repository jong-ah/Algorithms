function solution(s, n) {
  let sum = '';

  let lowerZNum = 'z'.charCodeAt(0);
  let upperZNum = 'Z'.charCodeAt(0);
  const regex = /^[a-zA-Z]/;
  const lowerRegex = /^[a-z]/;
  const upperRegex = /^[A-Z]/;

  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (regex.test(str)) {
      let num = str.charCodeAt(str) + n;

      if (lowerRegex.test(str)) {
        while (num > lowerZNum) {
          num = num - 26;
        }
      } else if (upperRegex.test(str)) {
        while (num > upperZNum) {
          num = num - 26;
        }
      }

      let code = String.fromCharCode(num);
      sum = sum + code;
    } else {
      sum = sum + str;
    }
  }
  return sum;
}

let s = 'aC';
let n = 25;
let output = solution(s, n);
console.log(output);
