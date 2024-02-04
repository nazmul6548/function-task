const myArray = [4, 5, 6, 7, 8]

function addToArray(params) {
    console.log(`my array number : ${params[2]}`);
}
addToArray(myArray);







const myArray1 = [15,44,444, 6];
function name(params) {
    console.log(`my number is : ${params[2]}`);
}
name(myArray1);


function name(params) {
    console.log(`my name is ${params}`);
}
name("jewel")




const myObject ={
    name:"nazmul islam jewel",
    age:26,
    adress:"chittagong"
}

function myFunction (myParams) {
    // console.log(myParams);
    console.log(`my name is ${myParams.name} and my age ${myParams.age} i live in ${myParams.adress}.`);
}
myFunction(myObject)