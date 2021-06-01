function solution(s) {
  let sSort = s
    .split('')
    .sort()
    .reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, '');
  console.log(sSort);

  let Lower = '';
  let Upper = '';

  for (let i = sSort.length - 1; i >= 0; i--) {
    if (/[A-Z]/.test(sSort[i]) === true) {
      Upper = Upper + sSort[i];
    } else {
      Lower = Lower + sSort[i];
    }
  }
  console.log(Lower + Upper);
  return Lower + Upper;
}

let s = 'ABDEFvrC';
solution(s);
