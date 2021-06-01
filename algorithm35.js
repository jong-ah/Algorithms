function solution(s) {
  let sArr = s.toLowerCase().split('');
  let pArr = sArr.filter((el) => el === 'p');
  let yArr = sArr.filter((el) => el === 'y');

  if (pArr.length === yArr.length) {
    return true;
  }
  return false;
}

let s = 'pPoooyY';
solution(s);
