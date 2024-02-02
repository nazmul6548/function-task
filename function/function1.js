function name(params) {
  let joma = 0;
  for (let i = 0; i < params.length; i++) {
    joma = joma + params[i];
    // console.log(i);
  }
  return joma;
}
const myNum = [1, 2, 3, 4, 55, 6, 7, 8];
const i = name(myNum);
console.log(i);
// const
// name(4)
