// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const myArray = [9, 77, 5, 6, 1, 7, 8];
function myFunc(params) {
  // console.log(params);
  let sum = params[0];
  for (let i = 0; i < params.length; i++) {
    if (sum > params[i]) {
      sum = params[i];
    }
  }
  return sum;
}
const values = myFunc(myArray);
console.log(values);
