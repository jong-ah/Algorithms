function solution(nums) {
  let answer = 0;
  const differ = [];

  for (let i = 0; i < nums.length; i++) {
    if (!differ.includes(nums[i])) {
      differ.push(nums[i]);
    } else {
      continue;
    }
  }
  console.log(differ);

  if (nums.length / 2 >= differ.length) {
    answer = differ.length;
  } else {
    answer = nums.length / 2;
  }

  console.log(answer);
  return answer;
}

let nums = [3, 1, 2, 3];
solution(nums);
