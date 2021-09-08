// 왜 2배를 곱하는지 아직 이해가 잘 안 간다...ㅜㅜ
// AAAZ가 있을 경우 첫번째 A에서 끝의 Z로 가면 된다. A를 안 거친다는 말
// 3번 시간초과 계속 난다 => 아 j를 var로 만들어서 가져올 수 있구나

function solution(name) {
  var answer = 0;
  let temp=[];
  for(let i=0;i<name.length;i++) {
      temp.push('A');
      let diff=name[i].charCodeAt()-temp[i].charCodeAt();
      answer+=diff>13 ? 26-diff:diff;
  }
  let minMove=name.length-1;
  for(let i=1;i<name.length;i++){
      if(name[i]==='A'){
          for(var j=i+1;j<name.length;j++){
              if(name[j]!=='A') break;
          }
          const left=i-1;
          const right=name.length-j;
          minMove=Math.min(minMove,left>right ? left+right*2:left*2+right);
          i=j;
      } 
  }
  return answer+minMove;
}

// let name = 'JAZ';
// let name = "JEROEN";
let name = 'AAAABAAAAAAABB';
console.log(name.length)
let output = solution(name);
console.log(output);

// ! 시도1
// function solution(name) {
//   var answer = 0;
//   let aph = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];

//   name = name.split('');
//   let base = new Array(name.length).fill('A');
//   let temp = 0;

//   // 기본값과 전달값이 같을 때까지 반복
//   while (base.join('') !== name.join('')) {
//     // 기본값과 전달값의 위치 확인
//     let basePos = aph.indexOf(base[temp]);
//     let namePos = aph.indexOf(name[temp]);

//     // 기본값과 전달값의 위치가 다르다면 이동해야함으로 answer에 더한다
//     if (basePos !== namePos) {
//       // 기본값과 전달값의 위치의 차가 알파벳 반 이상이면 반대쪽으로 이동해야 빠르다.
//       if (Math.abs(basePos - namePos) > aph.length / 2) {
//         answer += aph.length - Math.abs(basePos - namePos);
//       } else {
//         // 알파벳 반 이상이 아니라면
//         answer += Math.abs(basePos - namePos);
//       }
//       // 같은 위치로 이동했음으로 값을 동일하게 변경한다.
//       base[temp] = name[temp];
//     }

//     // 위 조건으로 기본값과 전달값의 위치가 같아졌다.
//     if ((basePos = namePos)) {
//       // 다음 칸으로 이동해야한다.
//       answer++;
//     }
//     temp++;
//   }

//   // 마지막 다음 칸으로 이동한 값을 뺀다.
//   return answer - 1;
// }

// ! 시도2
// function solution(name) {
//   var answer = 0;
//   let base = [];

//   for (let i = 0; i < name.length; i++) {
//     base.push('A')
//     let diff=name[i].charCodeAt()-base[i].charCodeAt();
//     answer += diff > 13 ? 26 - diff : diff;
//   }

//   let nextMove = name.length - 1;

//   for (let i = 1; i < name.length; i++) {
//     if (name[i] === 'A') {
//       let j = 0;
//       for (let z = i + 1; z < name.length; z++) {
//         if (name[z] !== 'A') {
//           j = z;
//           break;
//         }
//       }
//       // 연속을 시작하는 A가 맨 처음으로 갈 수 있는 거리
//       let left = i - 1;
//       // 연속이 끝난 다음 알파벳 B가 맨 끝으로 가는 거리
//       let right = name.length - j;
//       // 연속되는걸 다 지나갈 때, 처음으로 바로 갈때, 끝 바로 갈 때
//       // *2는 이전 알파벳만큼 온 거리를 돌아가는 거리(돌아갈때 조작은 2번하나)
//       nextMove = Math.min(
//         nextMove,
//         left > right ? left + right * 2 : left * 2 + right
//       );
//       i = j;
//     }
//   }

//   return answer + nextMove;
// }
