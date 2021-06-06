function solution(n, lost, reserve) {
  if (lost.length === 0) return n;
  if (reserve.length === 0) return n - lost.length;

  let filterLost = lost.filter((el) => {
    if (reserve.includes(el) === true) {
      reserve.splice(reserve.indexOf(el), 1);
      return false;
    } else return true;
  });

  let mapReserve = reserve.sort((a, b) => a - b).map((el) => [el - 1, el + 1]);
  let resultLost = filterLost
    .sort((a, b) => a - b)
    .filter((el) => {
      for (let i = 0; i < mapReserve.length; i++) {
        console.log(mapReserve[i], el);
        if (mapReserve[i].includes(el)) {
          mapReserve.splice(i, 1);
          return false;
        }
      }
      return true;
    });

  return n - resultLost.length;
}

let n = 3;
let lost = [3];
let reserve = [1];
let output = solution(n, lost, reserve);
console.log(output); 
