function bills(input){
    let index = 0;
    const months = Number(input[index++]);
    let waterPerMonth = 20;
    let internetPerMonth = 15;
    let electricityCost = 0;
    let otherCost = 0;
    let totalMonthlyCost = 0;

        for (let i = 0; i < months; i++) {
            let currentElectricityCost = Number(input[index++]);
            electricityCost += currentElectricityCost;
            otherCost += (waterPerMonth + internetPerMonth + currentElectricityCost) * 1.2;
        } totalMonthlyCost = (waterPerMonth * months + internetPerMonth * months + otherCost + electricityCost) / months;
         console.log(`Electricity: ${electricityCost.toFixed(2)} lv\nWater: ${(waterPerMonth * months).toFixed(2)} lv`);
         console.log(`Internet: ${(internetPerMonth * months).toFixed(2)} lv\nOther: ${otherCost.toFixed(2)} lv\nAverage: ${totalMonthlyCost.toFixed(2)} lv`)
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])