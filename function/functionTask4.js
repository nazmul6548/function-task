// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
// ans:
function name(params) {
    sum = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] == 0) {
            sum++;
        } 
    }
    return sum;
}

const res ="170000000000007890";
const lets =name(res);
console.log(lets);
