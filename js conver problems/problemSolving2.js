// leap year

function myFunc(params) {
    if ( params % 4 === 0) {
        return true;
        
    }else {
        return false;
    }
    
}
const sal = 2028;
const leapYear =myFunc(sal);
console.log(leapYear);