function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((el) => {
      if (el !== '') {
        console.log(el);
        return [`${el[0].toUpperCase()}${el.slice(1)}`];
      } else {
        return el;
      }
    })
    .join(' ');
}

let s = '3people  unFollowed me';
let output = solution(s);
console.log(output);
