// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function myFun(celsius) {
    let fahrenheit = celsius * ( 9 / 5) + 32;
    // console.log(fahrenheit);
    return fahrenheit;
    
}
const myCelsiusValue = 40;
const myFahrenheitValue = myFun(myCelsiusValue)
console.log(myFahrenheitValue);