function canPay(firstInput, secondInput) {
  if (firstInput.length === 0) {
    return "please input  array number";
  }

  let sum = 0;
  for (let i = 0; i < firstInput.length; i++) {
    sum = sum + firstInput[i];
  }
  if (sum >= secondInput) {
    return "true";
  } else {
    return "false";
  }
}

//    return sum;

const myTk = [];
const cheepsPrice = 10;
const tk = canPay(myTk, cheepsPrice);
console.log(tk);
