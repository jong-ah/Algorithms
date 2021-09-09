// 참고 https://gobae.tistory.com/m/71?category=940211

function solution(arr) {
  // 한개밖에 없을 때 그 값이 1이면 1의 수에 +, 0이면 압축된 것으로 +
  if (arr.length === 1) return arr[0][0] ? [0, 1] : [1, 0];
  // [압축된 결과, 1의 수]
  var answer = [0, 0];
  let len = arr.length;
  let half = len / 2;

  let num = arr[0][0];
  let compress = true;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // 값과 다르면 압축할 수 없으므로 false
      if (num !== arr[i][j]) {
        compress = false;
        break;
      }
    }
  }

  // 압축할 수 있다면 값을 더한다.
  // [num] 배열을 플러스할 수 있다.
  if (compress) {
    answer[num]++;
    console.log(answer)
    return answer;
  }

  // 압축할 수 없을 때, 그 다음으로 압축될 수 있는 것을 찾는다. (재귀함수)
  // 0,1 두 개만 있으니 [0,0][0,1].. 나올 수 있는 이중 for문을 만든다.
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      // console.log(i, j)
      // 다음 재귀함수에 넣어줄 배열
      const compressArr = [];
      for (let k = 0; k < half; k++) {
        // arr[] 1줄의 slice 반절씩, 반절의 반절씩...
        compressArr.push(arr[half * i + k].slice(j * half, (j + 1) * half));
      }
      // return answer값을 받는다. 
      const [zero, one] = solution(compressArr);
      answer[0] += zero;
      answer[1] += one;
    }
  }
  return answer;
}
