function picnicBudget(params) {
    const forFirst100 = 5000;
    const forSecond100 =4000;
    const forAbove200 = 3000;
    if (typeof params !== "number") {
        return "please enter number"
    }
    else if ( params <= 0) {
        return "0 othoba 0 theke besi number daw"
    }

    else if (params <= 100) {
        let totalForFirst100 = params * forFirst100;
        // console.log(totalForFirst100);
        return totalForFirst100;
    }
    else if (params <= 200) {
        let totalForFirst100 = params * 5000;
        let to100and200 = params - 100;
        let to200 = to100and200 * forSecond100;
        let total4 = totalForFirst100 + to200;
        console.log(total4);
    }
    else if (params > 200) {
       let total1 = 5000 * 100;
       let  total2 = 4000 * 100;
       let total3 =(params - 200) * forAbove200;
       let total =total1 + total2 + total3;
       return total;
    }
}
const picnicEjabe = 201;
console.log(picnicBudget(picnicEjabe));