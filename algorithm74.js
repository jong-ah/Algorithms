function solution(table, languages, preference) {
  let job = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

  while (languages.length > 0) {
    for (let i = 0; i < table.length; i++) {
      let temp = table[i].split(' ').reverse();
      if (temp.indexOf(languages[0]) !== -1) {
        let pre = job[i];
        job[i] = pre + (temp.indexOf(languages[0]) + 1) * preference[0];
      } else {
        let pre = job[i];
        job[i] = pre + 0;
      }
    }
    languages.shift();
    preference.shift();
  }

  let arr = Object.keys(job).map(function (key) {
    return job[key];
  });
  let max = Math.max.apply(null, arr);
  answer = table[arr.indexOf(max)].split(' ')[0];
  let idx = arr.indexOf(max);
  let indices = [];
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(max, idx + 1);
  }

  if (indices.length === 1){
    answer = table[indices[0]].split(' ')[0]
  } else {
    let temp2 = []
    for ( let i = 0; i < indices.length; i++){
      temp2.push(table[indices[i]].split(' ')[0])
    }
    answer = temp2.sort()[0]
  }
  

  return answer;
}

// let table = [
//   'SI JAVA JAVASCRIPT SQL PYTHON C#',
//   'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
//   'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
//   'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
//   'GAME C++ C# JAVASCRIPT C JAVA',
// ];
// let languages = ['PYTHON', 'C++', 'SQL'];
// let preference = [7, 5, 5];

let table = [
  'SI JAVA JAVASCRIPT SQL PYTHON C#',
  'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
  'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
  'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
  'GAME C++ C# JAVASCRIPT C JAVA',
];
let languages = ['JAVA', 'JAVASCRIPT'];
let preference = [7, 5];

let result = solution(table, languages, preference);
console.log(result);
