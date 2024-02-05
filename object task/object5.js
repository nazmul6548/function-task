// 100 == 100Tk
// 100up =90tk

// 200up=80

function myFunc(params) {
  const firstPrice = 100;
  const secondPrice = 90;
  const thirdPrice = 80;

  if (params <= 100) {
    const total = params * firstPrice;
    // console.log(total);
    return total;
  } else if (params <= 200) {
    const first100Price = 100 * firstPrice;
    const secondCount = params - 100;
    const above100 = secondCount * secondPrice;
    const total = above100 + first100Price;
    return total;
  } else {
    const first100Price = 100 * firstPrice;
    const above100 = 100 * secondPrice;
    const thirdValue = params - 200;
    const above200 = thirdPrice * thirdValue;
    const total = above200 + first100Price + above100;
    return total;
  }
}

const totalvalue = 300;
const totalPrice = myFunc(totalvalue);
console.log(totalPrice);
