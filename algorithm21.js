function solution(arr) {
  var sort = [...arr];

  let small = sort.sort((a, b) => a - b);

  let result = arr.filter((num) => num !== small[0]);

  return result.length ? result : [-1];
}

let arr = [10];
solution(arr);
