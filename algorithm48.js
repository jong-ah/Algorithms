function solution(new_id) {
  let lowerId = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .substr(0, 15)
    .replace(/^\.|\.$/g, '');

  if (!lowerId) lowerId = 'a';
  return lowerId.length > 2
    ? lowerId
    : lowerId.padEnd(3, lowerId[lowerId.length - 1]);
}

let new_id = '...!@BaT#*..y.abcdefghijklm';
let output = solution(new_id);
console.log(output);
