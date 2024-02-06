// akta function perameter hisebe nive (ana) tarpor seta k vori te convert kore koto man hy se songkha return korbe .

function myFunc(params) {
  if (typeof params != "number") {
    return "please provide a number";
  } else if (params <= 0) {
    return "count to 1";
  }
  let vori = params * 0.0625;
  return vori;
}
//1 ana = 0.0625 vori
const myGold = 0;
console.log(myFunc(myGold));
