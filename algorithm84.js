// 처음에 연속으로 붙은 같은 알파벳 2개를 찾고, 없앤다
// 없애거에서 다시 위를 반복한다. (재귀함수)
// 탈출조건 :연속으로 붙은 같은 알파벳이 없을 경우, 문자열이 남아있으면 0, 없으면 1을 리턴한다.
// 위처럼하면 시간초과
// 저렇게 아래처럼 간단하게 생각하는게 어렵네

// function findStr(s) {
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       let deleteStr = s.substr(i, 2);
//       return s.replace(deleteStr, '');
//     }
//   }
//   return s;
// }

function solution(s) {
  if (s.length % 2 === 1) return 0;

  const answer = []
  const a = [...s]

  for(let i = 0; i < a.length; i++) {        
      //문자 비교
      if(a[i] == answer[answer.length-1]) {
          answer.pop();
          continue
      }

      //문자 입력
      answer.push(a[i])
      // console.log(answer,a.length - i,answer.length)

      //남은 문자의 개수가 현재까지 입력된 개수보다 적으면 0
      if(a.length - i < answer.length) return 0
  }
  return 1
}

let s = 'baabaa';
// let s = 'cdcd';
let output = solution(s);
console.log(output);
