// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// ans:

function odd_even(myCondition) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < myCondition.length; i++) {
        if (myCondition[i] % 2 === 0) {
        even = myCondition[i];
        console.log(even,"even");
        
        
    }else{
        
        console.log(odd,"odd");
    }
    
   }
   return even,odd
}
const num = [1,2,3,4,55,6,7,8,9,22];
const ttt = odd_even(num);
console.log(ttt);