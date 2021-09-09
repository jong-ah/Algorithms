// 참고 https://gobae.tistory.com/62
// 이해하기 어렵다

function solution(p) {
  // 빈문자면 빈문자 리턴
  if (p === '') return '';
  // u 앞에서부터 균형잡힌 문자열까지
  // v 나머지 문자열
  let u, v;
  let cnt = 0;

  const pLen = p.length;
  for (let i = 0; i < pLen; i++) {
    p[i] === '(' ? cnt++ : cnt--;
    // 균형잡혔다면
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  // u를 올바른 괄호 문자열로 바꾸기
  const uLen = u.length;
  for (let i = 0; i < uLen; i++) {
    u[i] === '(' ? cnt++ : cnt--;
    // 0이 아니라면 올바른 괄호가 아니다
    if (cnt < 0) {
      let str = '';
      str += `(${solution(v)})`;
      // u의 앞뒤 문자를 제거하고, 나머지 문자의 괄호 방향을 뒤집으면 "()"이 됩니다.
      for (let j = 1; j < uLen - 1; j++) {
        u[j] === '(' ? (str += ')') : (str += '(');
      }
      return str;
    }
  }
  return u + solution(v);
}

// let p = '(()())()';
let p = '()))((()';
let output = solution(p);
console.log(output);
