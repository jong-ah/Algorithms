// 정규식 제대로 알기

function solution(files) {
  // ^시작이 \D 숫자가 아닌 것 + 연속
  let strRegex = /^\D+/;
  // \d 숫자인 것 + 연속
  let numRegex = /\d+/;

  let answer = files.sort((a, b) => {
    // match만 하면 [ 'img', index: 0, input: 'img10.png', groups: undefined ]
    // 위 결과물이 나옴으로 그중 0번째 값을 빼와 비교한다
    let aHeader = a.match(strRegex)[0].toLowerCase();
    let bHeader = b.match(strRegex)[0].toLowerCase();
    // console.log(aHeader);

    // a - b
    if (aHeader > bHeader) return 1;
    else if (aHeader < bHeader) return -1;

    // ^ 시작이 0이 + 연속으로 있는 건 찾아서 ''로 바꿔라 => 앞의 0이 사라진다.
    let aNum = a.match(numRegex)[0].replace(/^0+/, '');
    let bNum = b.match(numRegex)[0].replace(/^0+/, '');
    // console.log(aNum);

    // a - b
    return aNum - bNum;
  });

  return answer;
}

let files = [
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
];
let output = solution(files);
console.log(output);
