function basketballEquipment(input){
    const annualTaxPrice = Number(input[0]);
    const trainers = annualTaxPrice - 0.4 * annualTaxPrice;
    const equipment = trainers - 0.2 * trainers;
    const basketball = equipment / 4;
    const accessories = basketball / 5;
    const totalPrice = annualTaxPrice + trainers + equipment + basketball + accessories;
    console.log(totalPrice);
}
basketballEquipment(["365"])