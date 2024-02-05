function additio(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
function subtraction(num1, num2) {
  const sub = num1 - num2;
  return sub;
}
function multiple(num1, num2) {
  const multi = num1 * num2;
  return multi;
}
function division(num1, num2) {
  const div = num1 / num2;
  return div;
}

function calculation(a, b, operation) {
  if (operation === "addition") {
    const result1 = additio(a, b);
    return result1;
  } else if (operation === "subtraction") {
    const result12 = subtraction(a, b);
    return result12;
  } else if (operation === "multiplication") {
    const result3 = multiple(a, b);
    return result3;
  } else if (operation === "division") {
    const result4 = division(a, b);
    return result4;
  } else {
    return "please enter a number value";
  }
}
const result = calculation(5, 15, "division");
console.log(result);
lo
