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









// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
// modify
function myFunction(params) {
  let sums = 0;
  if (Array.isArray(params) === false) {
    return "provide array"
   }
   for (let i = 0; i < params.length; i++) {
    sums = sums + params[i];
    if (params[i] < 0) {
      return "provide positive number"
     }
     
}

  
  let avarage = sums / params.length;
  // return  parseInt(avarage);
  // let ava = Math.round(avarage);
  let avar = avarage.toFixed(2)
  return avar;
  
}
const myArrayNumber =66;
console.log(myFunction(myArrayNumber));