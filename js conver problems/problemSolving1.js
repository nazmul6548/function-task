function myFunc(miles) {
  const part1 = miles * 1.60934;
  const part2 = parseInt(part1);
  // console.log(part2);
  const part3 = miles % 1.60934;
  const part4 = parseInt(part3);
  // console.log(part4);
  const result = part2 + part4;
  return result;
}
const miles1 = 59;
const milesToKilometer = myFunc(miles1);
console.log(milesToKilometer);
