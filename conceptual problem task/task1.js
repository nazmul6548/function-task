// have any object
const myObject = {
  name: "nazmul",
  age: 43,
};

function myFunc(params) {
  // console.log(params);
  if (typeof params !== "object") {
    return "object daw";
  } else if (!params.name || !params.age) {
    return "tik moto object daw";
  } else if (
    typeof params.name !== "string" ||
    typeof params.age !== "number"
  ) {
    return "name = string daw and age = number daw";
  }
  return `my name is ${params.name} and my age is ${params.age}`;
}
const output = myFunc(myObject);
console.log(output);
