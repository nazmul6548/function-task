// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
// ans:


function calculateElectronicsBudget(laptop1,tablet1,mobile1) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const laptopPrice = laptop * laptop1;
    
    const tabletPrice = tablet * tablet1;
   
    const mobilePrice = mobile * mobile1;

    const totalPrice = laptopPrice + tabletPrice + mobilePrice;

    return totalPrice;
}

const totalMoney = calculateElectronicsBudget(1,1,1);
console.log("totalMoney :", totalMoney);

