function cleverLily(input){
    const age = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const toysPrice = Number(input[2]);
     let money = 0;
     let toysCount = 0;
     let addedMoney = 10;
     for (let i = 1; i <= age; i++) {
        if (i % 2 === 0){
            money += addedMoney;
            addedMoney += 10;
            money -= 1;
        } else {
            toysCount += 1;
        }
     }
     money += toysCount * toysPrice;
     let diff = Math.abs(money - washingMachinePrice);
     if (money >= washingMachinePrice){
      console.log(`Yes! ${diff.toFixed(2)}`);
     } else {
         console.log(`No! ${diff.toFixed(2)}`)
     }
}
cleverLily(["10",
"170.00",
"6"])


