function solution(s) {
  let strArr = s.split(' ');
  let result = '';

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (j % 2) {
        result = result + strArr[i][j].toLowerCase();
      } else {
        result = result + strArr[i][j].toUpperCase();
      }
    }
    result = result + ' ';
  }
  console.log(result);
  return result.slice(0, -1);
}

let s = 'try hello world';
solution(s);
