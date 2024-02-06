function sortMaker(params) {
  [a, b] = params;
  if (a < 0 || b < 0) {
    return "invalid input";
  } else if (a === b) {
    return "equal";
  } else {
    let res1 = params.sort();
    let res2 = res1.reverse();
    return res2;
  }
}

const myArray = [4, -2];
const result = sortMaker(myArray);
console.log(result);
