function solution(n) {
  let sqrt = Math.sqrt(n);

  if (Math.ceil(sqrt) !== sqrt) {
    return -1;
  }
  
  return Math.pow(sqrt + 1, 2);
}

const n = 3;
solution(n);
