// 1,5,14,15만 통과 -> 왜?
// p.push(p.shift()) 이것으로 하면 실패뜬다 => 변수 first 만듦
// Math.max(...p) 시간초과 뜬다 => filter로 바꿨다.

function solution(p, l) {
  var answer = 0;
  let count = 0;

  while (p.length > 0) {
    // 제일 중요하지 않으면 인쇄 안 하고 대기순이 뒤로 밀려난다.
    let first = p.shift();
    if (p.filter((el)=> el > first).length > 0) {
      p.push(first);
    } else {
      // 제일 중요하다면 인쇄된다.
      count++;
      // 인쇄된 것이 l이라면 맨 앞에 위치하므로 결과값을 리턴한다.
      if (l === 0) {
        return (answer = count);
      }
    }
    // 앞의 문서가 뒤로 가면서 기존 l의 위치가 앞으로 이동한다.
    l--;
    // 위치가 -1이 되면 중요문서가 있어 뒤로 밀려난 상태이므로 위치를 맨 끝으로 재할당한다.
    if (l === -1) {
      l = p.length - 1;
    }
  }

  return answer;
}

// let priorities = [2, 1, 3, 2];
// let location = 2;
let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;
let output = solution(priorities, location);
console.log(output);
