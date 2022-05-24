function pets(input){
    const numberOfDays = Number(input[0]);
    const foodLeftKG = Number(input[1]);
    const dogFoodPerDayKG = Number(input[2]);
    const catFoodPerDayKG = Number(input[3]);
    const turtleFoodPerDayGR = Number(input[4]);

    const dogFoodNeeded = dogFoodPerDayKG * numberOfDays;
    const catFoodNeeded = catFoodPerDayKG * numberOfDays;
    const turtleFoodNeeded = (turtleFoodPerDayGR * numberOfDays) / 1000; 
    const totalFoodNeedForPets = dogFoodNeeded + catFoodNeeded + turtleFoodNeeded;
    if (totalFoodNeedForPets <= foodLeftKG){
        const difference = Math.floor(foodLeftKG - totalFoodNeedForPets);
        console.log(`${difference} kilos of food left.`);
    } else {
        const howShort = Math.abs(totalFoodNeedForPets - foodLeftKG);
        console.log(`${Math.ceil(howShort)} more kilos of food are needed.`);
    }
}
pets(["5", "10", "2.1", "0.8", "321"]);

// function pets(input) {
//     const days = Number(input[0]);
//     const leftFoodInKg = Number(input[1]);
//     const dogFoodPerDay = Number(input[2]);
//     const catFoodPerDay = Number(input[3]);
//     const turtleFoodPerDay = Number(input[4]) / 1000;
  
//     const foodPerDay = dogFoodPerDay + turtleFoodPerDay + catFoodPerDay;
//     const neededFood = days * foodPerDay;
  
//     const difference = Math.abs(neededFood - leftFoodInKg);
  
//     if (neededFood <= leftFoodInKg) {
//       console.log(`${Math.ceil(difference)} kilos of food left.`);
//     } else console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
//   }