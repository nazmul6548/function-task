function pandajCost(params1, params2, params3) {
  let singgaraDam = 7;
  let somucaDam = 10;
  let jilapiDam = 15;

  if (
    typeof params1 !== "number" ||
    typeof params2 !== "number" ||
    typeof params3 !== "number"
  ) {
    return "please provide numbers";
  } else if (params1 < 0 || params2 < 0 || params3 < 0) {
    return "count 0";
  }

  const totalSinggara = singgaraDam * params1;
  // console.log(totalSinggara);
  const totalSomuca = somucaDam * params3;
  // console.log(totalSomuca);
  const totalJilapi = jilapiDam * params2;
  // console.log(totalJilapi);
  const totalPrice = totalSinggara + totalJilapi + totalSomuca;
  return totalPrice;
}
const totalSinggara = 3;
const totalJilapi = 1;
const totalSomuca = 4;
console.log(pandajCost(totalSinggara, totalJilapi, totalSomuca));
