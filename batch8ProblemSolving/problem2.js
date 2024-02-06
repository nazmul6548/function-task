// batch 8 assignment problem1
function matchFinder(params1, params2) {
  if (typeof params1 !== "string" || typeof params2 !== "string") {
    return "please provide string";
  } else {
    const returnValue = params1.includes(params2);
    return returnValue;
  }
}

const firstString = [];
const secondString = true;
const output = matchFinder(firstString, secondString);
console.log(output);
