// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// ans:

// function myNum(params) {
//   let result = 0;
//   if (params % 2 === 0) {
//     result = params / 2;
//     // console.log(result);
//   }
//   return result;
// }
// const num = 12;
// let n = myNum(num);
// console.log(n);

// odd numbers
// function myFunc(params) {
//   sums = 0;
//   if (params % 2 !== 0) {
//     sums = params * 2;
//   }
//   return sums;
// }
// const number = 6;
// const myRes = myFunc(number);
// console.log(myRes);



function myFunc(params) {
  sums = 0;
  if (params % 2 !== 0) {
    sums = params * 2;
  } else {
    sums = params / 2
  }
  return sums;
}
const number = 5;
const myRes = myFunc(number);
console.log(myRes);
