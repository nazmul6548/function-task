// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0
function myFunc(params) {
  let myStore = 0;
  for (let i = 0; i < params.length; i++) {
    // console.log(params[i]);
    if (params[i] === checkValue) {
      // myStore.push(params);
      myStore = myStore + 1;
      //    console.log(myStore);
    }
  }
  return myStore;
}
const input = [1, 4, 5, 5, 5, 5, 5, 5, 5, 5];
const checkValue = 5;
const result = myFunc(input);
console.log(result);
