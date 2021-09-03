// 각 학생들이 받은 점수의 평균을 구하여, 기준에 따라 학점을 부
// 자기 자신을 평가한 점수가 유일한 최고점 또는 유일한 최저점이라면 그 점수는 제외
// 학점을 구하여 하나의 문자열

// 학생의 받은 점수를 모두 모은다. for문 사용
// 모은 점수에서 자신의 점수가 최저,최고점인지 확인한다 Math.max, Math.min
// 그것이 유일한지 확인한다. indexOf, lastIndexOf => 그렇다면 제외한다. filter
// 평균 점수를 구하고 reduce => 학점을 준다. if
// 위 방법을 학생 수만큼 반복한다. scores.length => while

function solution(scores) {
    var answer = '';
    let temp = 0;
    
    //  학생 수만큼 반복한다
    while ( temp < scores.length ) {
    
        let arr = [];
        
        // 학생의 받은 점수를 모두 모은다.
        for ( let i = 0; i < scores.length; i++ ) {
            arr.push(scores[i][temp]);
        }
        
        // 자신의 점수가 최저,최고점인지 확인 & 유일한지 확인 => 그러하다면 자기 점수를 뺀다.
        if ( Math.max(...arr) === arr[temp] || Math.min(...arr)===arr[temp]) {
            if ( arr.indexOf(arr[temp]) === arr.lastIndexOf(arr[temp])) {
                arr = arr.filter((el, idx) => idx !== temp);
            }
        }
        
        // 평균 점수를 구한다.
        let sum = arr.reduce((acc, cur)=>{
            acc= acc + cur
            return acc
        })/arr.length;
        
       
        // 학점을 준다.
        if (sum >= 90) {
            answer = answer + 'A';
        } else if (sum >= 80) {
            answer = answer + 'B';
        } else if (sum >= 70) {
            answer = answer + 'C';
        } else if (sum >= 50) {
             answer = answer + 'D';
        } else {
           answer = answer + 'F';
        }
        
        temp = temp + 1;
    }
    
    return answer;
    
}
