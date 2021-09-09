// 참고 https://gobae.tistory.com/72

function solution(m, musicinfos) {
  const arr = musicinfos.map((mi) => {
    const [start, end, title, code] = mi.split(',');
    const hour = end.slice(0, 2) - start.slice(0, 2);
    const minute = end.slice(3) - start.slice(3);
    const runtime = 60 * hour + minute;

    const codeArr = code.match(/[A-Z]#?/g);
    // 런타임이 동안 반복된 코드를 넣는다. 코드 7분, 런타임 14분
    let stream = code.repeat(Math.floor(runtime / codeArr.length));
    // 코드가 중간에 잘린 것도 넣는다. 코드 6분, 런타임 5분
    stream += codeArr.slice(0, runtime % codeArr.length).join('');
    return [title, runtime, stream];
  });

  const answer = arr.filter(([title, runtime, stream]) => {
    let idx = stream.indexOf(m);
    // 네오가 기억하는 음이 있는지 없는지 확인한다
    if (idx === -1) return false;
    while (idx !== -1) {
      // 끝에 #이 붙으면 다른 코드이므로 다시 찾아야한다.
      if (stream[idx + m.length] !== '#') return true;
      idx = stream.indexOf(m, idx + 1);
    }
  });

  // 찾는게 없다면 none 리턴한다.
  if (!answer.length) return '(None)';

  // 조건에 일치하는게 많다면 긴 음악 제목을 리턴한다.
  answer.sort((a, b) => {
    if (a[1] === b[1]) return 0;
    return b[1] - a[1];
  });

  return answer[0][0];
}

let m = 'ABCDEFG';
let musicinfos = ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'];
let output = solution(m, musicinfos);
console.log(output);
