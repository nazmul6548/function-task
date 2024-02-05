const phones = [
  { name: "samsung", price: 50000, color: "black" },
  { name: "oppo", price: 39000, color: "orange" },
  { name: "walton", price: 25000, color: "red" },
  { name: "iphone", price: 135000, color: "black" },
  { name: "redmi", price: 30000, color: "blue" },
];

function myFunc(params) {
  let inexpensive = params[0];
  // console.log(params);
  for (const key in params) {
    //console.log(key);
    //console.log(params[key]);
    let keys = params[key];
    // console.log(keys);
    if (inexpensive.price > keys.price) {
      inexpensive = keys;
    }
  }
  return inexpensive;
}
const myPhone = myFunc(phones);
// console.log(myPhone);
