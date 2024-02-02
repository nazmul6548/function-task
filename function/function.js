function myFirstFunc(number1 , number2) {
    const result = number1 * number2;
    // console.log(result);
    
}
myFirstFunc(4 , 5);
const any1 = 2;
const any2 = 3;
myFirstFunc(any1,any2)


function myFunc2 (num1) {
    const res = num1 * 11;
    return res;
    // console.log();
    
}
myFunc2(2)
const store = myFunc2(3);
// console.log(store);/

function names (num3 , num4) {
    const result = num3 + num4;
    return result;
    
}
const add1 = names(2 , 3);
// console.log(add1);

function isName(value1 , value2) {
    return value1 - value2;
    
}
let a = 19;
let b =15;
const addNum = isName(a,b);
// console.log(addNum);




function con (p1) {
    if (p1 % 2 === 0) {
        return "even numbere"
        
    }else {
        return "odd numbere"
    }
    
}
con(3)
const result = con(9);
// console.log(result);

function xyz(params) {
    const res = params.length;
    if (res % 2 === 0) {
        // console.log("nazmul even numere",res);
    }
    // console.log(res,params);
    
}
xyz("nazmul")



function name(params ,boolean) {
    if (boolean === true) {
        const res = params * 3;
        return res;
        
    }
    
}
const n = name(3, true);
// console.log(n);