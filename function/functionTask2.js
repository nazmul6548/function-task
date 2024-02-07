// Task-2
// Take a number if the number is odd multiply it by
//  2 and return the result. If the number is even divide 
//  it by two and return the result.
// ans:
// even
function myNum(params) {
  let result = 0;
  if (params % 2 === 0) {
    result = params / 2;
    // console.log(result);
  }
  return result;
}
const num = 12;
let n = myNum(num);
console.log(n);

// odd numbers
function myFunc(params) {
  sums = 0;
  if (params % 2 !== 0) {
    sums = params * 2;
  }
  return sums;
}
const number1 = 6;
const myRes1 = myFunc(number1);
console.log(myRes1);


// both
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








// modify
function myFunction(params) {
  if (typeof params !== 'number') {
    return "please provide a number"
  }
  else if (params <= 0 ) {
    return "count 1"
  }
  else if (params % 2 === 0) {
    let sum = params / 2;
    return sum;
  }else {
    sum = params * 2;
    return sum
  }
}
const myFunctionNumber = myFunction(0)
console.log(myFunctionNumber);