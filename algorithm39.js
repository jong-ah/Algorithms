function solution1(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = week[new Date(`2016,${a},${b}`).getDay()];
  console.log(date);
  return date;
}

function solution2(a, b) {
  let date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
