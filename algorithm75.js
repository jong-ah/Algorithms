// for count를 하고 그 안에 price를 곱한다. => 총합이 나온다 
// 총합 - money를 한다. => result
// 만약 -가 아니라면? 부족하지 않으면 0을 return

function solution(price, money, count) {
    let sum = 0;
    
    for ( let i = 0; i < count; i++ ) {
        sum = sum + (price*(i+1))
    }

    let result = sum - money;
    if ( result > 0 ){
        return result;
    } else {
        return 0;
    }
    
}
