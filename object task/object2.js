// largest number
const myNum = [99, 100, 101, 102, 103, 104, 105, 1090,0, 3];
function myFunc(params) {
  // console.log(params);
  let myStore =0;
  for (let i = 0; i < params.length; i++) {
    if (myStore < params[i]) {
      myStore = params[i];
    }
  }
  return myStore;
}
const result = myFunc(myNum);
console.log(result);



// smaller number
const myNum1 = [66,67,68,69,70,71,72,73,74,75];
function myFunc1(params1) {
  // console.log(params);
  let myStore =params1[0];
  for (let i = 0; i < params1.length; i++) {
    if (myStore > params1[i]) {
      myStore = params1[i];
    }
  }
  return myStore;
}
const result1 = myFunc1(myNum1);
console.log(result1);