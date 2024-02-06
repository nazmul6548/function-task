// batch 8 assignment problem1
function cubeNumber(input) {
  if (typeof input !== "number") {
    return "please enter any number";
  }
  const cubeNum = Math.pow(input, 3);

  return cubeNum;
}
const number = 6;
const result = cubeNumber(number);
console.log(result);
