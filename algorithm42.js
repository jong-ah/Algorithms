function solution(numbers) {
  let sumSet = new Set();
    
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      sumSet.add(sum);
    }
  }
    
  let answer = [...sumSet].sort((a, b) => a - b);
  return answer;
}

let numbers = [2, 1, 3, 4, 1];
let output = solution(numbers); // [2,3,4,5,6,7]
console.log(output);
