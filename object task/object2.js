const myNum = [99, 100, 101, 102, 103, 104, 105, 1090, 3];
function myFunc(params) {
  // console.log(params);
  let myStore = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] > myStore) {
      myStore = params[i];
    }
  }
  return myStore;
}
const result = myFunc(myNum);
console.log(result);
