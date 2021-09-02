function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six","seven", "eight", "nine"];

    for(var a in arr){
         let regexAll = new RegExp(arr[a], 'g');
        s = s.replace(regexAll, a);
    }

    return Number(s);
}
