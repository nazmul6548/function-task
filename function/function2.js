function name(params) {
    let sum = 0;
    for (const iterator of params) {
        if (iterator % 2 === 0) {
            // console.log(iterator);
            sum = sum + iterator;
            console.log(sum);
            // sum.push(iterator)
            
        }
       
    }
    return sum;
    
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = name(myArray)
console.log(sum);