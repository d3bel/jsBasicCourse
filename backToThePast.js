function backToThePast(input){
    const inheritedMoney = Number(input[0]);
    const lifeSpan = Number(input[1]);
    const startYear = 1800;
    const YearSpendings = 12000;
        let totalMoneyNeeded = 0;
        let currentAge = 17;

           for (let i = startYear; i <= lifeSpan; i++) {
               currentAge++;
                if (i % 2 === 0){
                    totalMoneyNeeded += YearSpendings
                } else {
                    totalMoneyNeeded += YearSpendings + 50 *currentAge;
                }
           } 
           let diff = Math.abs(inheritedMoney - totalMoneyNeeded).toFixed(2);
           if (totalMoneyNeeded <= inheritedMoney){
                console.log(`Yes! He will live a carefree life and will have ${diff} dollars left.`)
           } else {
               console.log(`He will need ${diff} dollars to survive.`)
           }
}
backToThePast(["100000.15", "1808"])
    