// leap year

function myFunc(params) {
  if ((params % 4 === 0 ) && (params % 100 !== 0 ) || (params % 400 !== 0)) {
    return true;
  } else {
    return false;
  }
}
const sal = 1900;
const leapYear = myFunc(sal);
console.log(leapYear);
