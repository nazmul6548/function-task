// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// ans:

const heights2 = ["dear", "tiger", "cat", "zebra", "goat"];
function myFunc(params) {
  let sum = params[0].length;
  for (let i = 0; i < params.length; i++) {
    if (sum > params[i].length) {
      sum = params[i];
    }
  }
  return sum;
}
const result = myFunc(heights2);
console.log(result);
