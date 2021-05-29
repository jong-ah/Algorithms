function solution(phone_number) {
  let firstNum = '';
  let SecondNum = '';

  for (let i = 0; i < phone_number.length - 4; i++) {
    firstNum = firstNum + '*';
  }
  for (let i = phone_number.length - 4; i < phone_number.length; i++) {
    SecondNum = SecondNum + phone_number[i];
  }
  return firstNum + SecondNum;
}
