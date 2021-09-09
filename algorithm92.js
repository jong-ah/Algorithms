// 다리 상황 bridge
// 이동하는 트럭 movingTruck
// 현재 다리 무게 nowBridgeWeight
// answer === time

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  let bridge = new Array(bridge_length - 1).fill(0);
  let movingTruck = truck_weights.shift();

  // 다리 위로 트럭 한 대 이동 중
  bridge.push(movingTruck);
  let nowBridgeWeight = movingTruck;
  answer++;

  // 트럭은 다 이동하기 전까지 언제나 무게가 있다
  // truck_weights.length !== 0의 조건은 다리에 다 이동못한 트럭도 있기 때문에 시간계산에 오차가 생긴다.
  while (nowBridgeWeight) {
    // 다리를 지남
    nowBridgeWeight = nowBridgeWeight - bridge.shift();
    let nextTruck = truck_weights[0];

    // 지나고 난 뒤에 다음트럭까지 수용할 수 있는지 확인
    if (nowBridgeWeight + nextTruck <= weight) {
      // 수용한다면 다리 위에 이동시키고 대기 트럭에 없애고, 현재 무게를 늘린다.
      bridge.push(nextTruck);
      truck_weights.shift();
      nowBridgeWeight = nowBridgeWeight + nextTruck;
    } else {
      // 수용불가라면 다리 위에 0을 푸시한다.
      bridge.push(0);
    }
    answer++;
  }

  return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];
let output = solution(bridge_length, weight, truck_weights);
console.log(output);
