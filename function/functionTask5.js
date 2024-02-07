// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// ans:
// option-1
function odd_even(myCondition) {
  let even = [];
  let odd = [];
  for (let i = 0; i < myCondition.length; i++) {
    if (myCondition[i] % 2 === 0) {
      even.push(myCondition[i]);
    } else {
      odd.push(myCondition[i]);
    }
  }
  return { even: even, odd: odd };
}
const num = [1, 2, 3, 4, 55, 6, 7, 8, 9, 22];
const finalResult = odd_even(num);
console.log(finalResult.even, "even");
console.log(finalResult.odd, "odd");

// option-2
function name(params) {
  if (params % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
let n1 = 22;
let result1 = name(n1);
console.log(result1);
let n2 = 23;
let result2 = name(n2);
console.log(result2);
