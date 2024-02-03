// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(params) {
  sum = 0;
  // console.log(params);
  for (let i = 0; i < params.length; i++) {
    sum = sum + params[i];
    // sum =sum / params.length;
    // console.log(sum);
    // return sum;
  }
  sum = sum / params.length;
  return sum;
}
const myNum = [32 , 25 , 23 , 24 , 26 ];
const result = make_avg(myNum);
console.log(result);
