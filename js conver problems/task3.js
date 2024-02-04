// Task-3:
// Write a function to count the number of vowels in a string.

// ans:

function myFunc(params) {
    let store = 0;
    for (let i = 0; i < params.length; i++) {
        
        if (params[i] === "a" || params[i] === "e" || params[i] === "i" || params[i] === "o" || params[i] === "u") {
            store = store + 1
            
        }
    }
    return store;
    
}
const myText = "Treating serious issues with inappropriate humor";
const result = myFunc(myText);
console.log(result);