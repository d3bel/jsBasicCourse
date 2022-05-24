function averageNumber(input){
    const numbersQuantity = Number(input[0]);
    let sumOfNums = 0;
    for(let i = 1; i <= numbersQuantity; i++){
        let currentNum = Number(input[i]);
        sumOfNums += currentNum;
    } let averageNum = sumOfNums / numbersQuantity;
    console.log(`${averageNum.toFixed(2)}`)
}
averageNumber(["4","3","2","4","2"])