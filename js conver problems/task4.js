// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming
// ans:
function myFunc(params) {
    let condition = params.split(' ');
    // console.log(condition);
    let store=''
    let store1 = 0;
    for (i = 0; i < condition.length; i++) {
        if ( condition[i].length > store1 ) {  // length>11
            store1 = condition[i].length;   //store1 =11
            store = condition[i];           //store = learning
        }
        
    }
    
    return store;



}
const myText = "i am learning programming to beacome a programmer";
const result = myFunc(myText);
console.log(result);