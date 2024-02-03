function myFunc(params) {
    const self = params / 12;
    // console.log(self);
    const res = parseInt(self)
    // console.log(res);
    const res2 = params % 12;
    // console.log(res2);
    const res3 = res + " foot " + res2 + " inches";
    // console.log(res3);
    return res3;

    
}
const inches = 88;
const result = myFunc(inches);
console.log(result);