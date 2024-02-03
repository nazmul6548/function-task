// Task-1
// Take four parameters. Multiply the four numbers and then return the result;
// ans:
// option-1
function myFunc(params) {
  sum = 1;
  for (let i = 0; i < params.length; i++) {
    sum = sum * params[i];
    // console.log(sum);
  }
  return sum;
}
const numbers = [5, 2, 3, 4];
const result = myFunc(numbers);
console.log(result);
//

// option-2
function name(par1 , par2 , par3 , par4) {
    let res = par1 * par2 * par3 * par4;
    console.log(res);
    
}
name(1,2,3,4);