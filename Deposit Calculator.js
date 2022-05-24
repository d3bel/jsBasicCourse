function depositCalculator(input){
    let sum = Number (input[0]);
    let depositlenght = Number (input[1]);
    let apr = Number (input[2]);
    let interest = (sum * apr) / 100;
    const interestPerMonth = interest /12
    let total = sum + depositlenght * interestPerMonth;
    console.log(`${total}`);
}
depositCalculator(["2350", "6", "7"])