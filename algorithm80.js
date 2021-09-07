function solution(people, limit) {
  var answer = 0;
  people.sort((a,b)=>a-b)
  // console.log(people)

  while (people.length !== 0){
    if (people[0]+people[people.length-1] <= limit){
      people.pop();
      people.shift();
      answer++;
    } else {
      people.pop();
      answer++
    }
  }

  return answer;
}

let people = [70, 50, 80, 50]
let limit = 100
let output = solution(people, limit)
console.log(output)
