// Challenge: Create a function which takes a phone number and then check if the number is valid Bangladeshi phone number or not. You can return boolean, an object or a string after validating the number.
// Users iccha moto jekono kichu dite pare, se +880 diye start korte pare, se country code na diyeo start korte pare 018.. 017 diye. se 11 digit er kom ba beshi dite pare. so all things should be taken into consideration.

// function myFunc(value) {
//     let res = value.split('');
//     // console.log(res);
//     for (let i = 0; i < res.length; i++) {
//         const store = value[i];
//         console.log(store);
//         if ((store[0] === 0  && store[1] === 1) && (store[2] === 9)) {
//             return true

//         }
//         return true;

//     }
//     // let res1 = res[i]
//     // console.log(res);
//     return true;
// }
// const phoneNumber ="5859336548";
// const phoneNumberResult = myFunc(phoneNumber);
// // console.log(phoneNumberResult);

// function myFunc(value) {
//     // let res = value.split('');
//     let phoneNumber1 ="+8801859336548";
//     let phoneNumber2 = "01859336548";

//     for (let i = 0; i < value.length; i++) {
//         const currentChar = value[i];
//         console.log(currentChar);

//         if ((currentChar.length === phoneNumber1.length) (currentChar.length)  && (currentChar.length === phoneNumber2.length) || (currentChar === '0' && value[i + 1] === '1' && (value[i + 2] === '9' || value[i + 2] === '8'
//          || value[i + 2] === '7'))) {
//             return true;
//         }
//     }

//     return false;
// }

// const phoneNumber ="+8801859336548";
// const phoneNumberResult = myFunc(phoneNumber);
// console.log(phoneNumberResult);

// function myFunc(value) {
//     let phoneNumber1 = "+8801859336548";
//     let phoneNumber2 = "01859336548";
//     let phoneNumber3 = "+88"

//     for (let i = 0; i < value.length; i++) {
//         const currentChar = value[i];

//         if ((value.length === phoneNumber1.length || value.length === phoneNumber2.length) ||
//             (currentChar === '0' && value[i + 1] === '1' && ( (value[i + 2] === '9' || value[i + 2] === '8' || value[i + 2] === '7')))) {
//             return true;
//         }
//     }

//     return false;
// }

// const phoneNumber = "01959336548";
// const phoneNumberResult = myFunc(phoneNumber);
// console.log(phoneNumberResult);

// function name(params) {
//     let num1 = "01859336548";
//     let num2 = "+8801859336548";
//     let num3 = "+88";
//     for (let i = 0; i < params.length; i++) {
//         let sum = params[i];

//         if ((params.length ===num1.length) || (params.length === num2.length) || (params.length< num1.length) || (params.length > num2.length) || (num3.includes(sum))) {

//             if (((num3.includes(sum) && params.length===num1.length ) || (params.length===num2.length) && (params.includes(num2)) )   (sum === '0' && params[i + 1] === '1' && ( (params[i + 2] === '9' || params[i + 2] === '8' || params[i + 2] === '7')))  ) {
//                 return true;
//             }else if( (params.length === num1.length) && params.includes(num1) ) {
//                 return true;

//             }else if (( params.length< num1.length )) {
//                 return false;

//             }else if (params.length > num2.length) {
//                 return false;
//             }
//         }
//         return false;

//     }

// }
// const phoneNumber = "+8801759336548";
// const result = name(phoneNumber);
// console.log(result);

function phoneNumber(number) {
  let num1 = "01859336548";
  let num2 = "+8801859336548";
  let num3 = "+88";

  if (
    number.length === num1.length ||
    number.length === num2.length
  ) {
    if (number.includes(num1) || number.includes(num2)) {
      return true;
    } else {
      return false;
    }
  } else if (
    number.length < num1.length ||
    number.length > num2.length ||
    num3.includes(number.slice(0, 3))
  ) {
    return false;
  } else if (
    number[0] === "0" &&
    number[1] === "1" &&
    (number[2] === "9" && number[2] === "7" && number[2] === "7")
  ) {
    return true;
  } else {
    return false;
  }
}
const number = "01959336548";
const result = phoneNumber(number);
console.log(result);
