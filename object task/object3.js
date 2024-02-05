// pant price = 900;
// shirt price = 600;
// shoes price =1200;

function myFunc(params1, params2, params3) {
  const pantPrice = 900;
  const shirtPrice = 600;
  const shoesPrice = 1200;
  const totalPantPrice = pantPrice * params1;
  const totalShirtPrice = shirtPrice * params2;
  const totalShoesPrice = shoesPrice * params3;
  const totalProductPrice = totalPantPrice + totalShirtPrice + totalShoesPrice;
  return totalProductPrice;
}

const totalPrice = myFunc(2, 4, 2);
console.log(totalPrice);
