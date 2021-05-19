function solution(n, lost, reserve) {
  var answer = 0;
    
  // lost가 기준이다.
  // 우선 같은 번호은 없앤다.
  for ( let i = 0; i < lost.length; i++ ) {
    if ( reserve.indexOf(lost[i]) !== -1 ) {
      lost.splice(i, 1);
      reserve.splice(reserve.indexOf(lost[i]), 1);
    }
  }
    
  // sort로 순서로 맞춰준다.
  lost.sort((a,b)=> a-b);
  reserve.sort((a,b)=> a-b);
  
  // reserve의 -1과 +1 중에선 indexOf(lost) 값으로 
  // 동일한 게 있는지 확인한다.
  for ( let i = 0; i < reserve.length; i++ ) {
    for ( let j = 0; j < lost.length; j++ ) {
      if ( [reserve[i]-1, reserve[i]+1].indexOf(lost[j]) !== -1 ) {
        lost.splice(j, 1);
        reserve.splice(i, 1);
      }
    }
  }
    
  answer = n - lost.length;
  return answer;
}
