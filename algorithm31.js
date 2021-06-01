function solution(s) {
  let result = false;

  if (s.length === 4 || s.length === 6) {
    if (isNaN(Number(s)) === false && !s.includes('e')) {
      result = true;
    }
  }

  console.log(result);
  return result;
}

let s = '1e22';
solution(s);
