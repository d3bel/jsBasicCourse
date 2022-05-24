function accountBalance(input){
    let index = 0;
    let totalMoney = 0;
    let depositMoney = input[index++];

        while(depositMoney !== 'NoMoreMoney'){
            let currentSum = Number(depositMoney)

            if(depositMoney < 0){
            console.log("Invalid operation!");
            break;
            }
            totalMoney += currentSum;
            console.log(`Increase: ${currentSum.toFixed(2)}`);
            depositMoney = input[index++]
        }
         console.log("Total: " + totalMoney.toFixed(2));
}
accountBalance(["120",
"45.55",
"-150"])

