// 1 + (w'-1) + (h'-1) = w' + h' - 1
// 참고 https://noogoonaa.tistory.com/74

// 유클리드 호제법을 이용한 최대 공약수 구하기
function gcd(w, h) {
  const mod = w % h;

  if (mod === 0) {
    return h;
  }

  return gcd(h, mod);
}

function solution(w, h) {
  const gcdVal = gcd(w, h);

  // 대각선이 지나가는 사각형 갯수 구하는 공식
  return w * h - (w + h - gcdVal);
}
