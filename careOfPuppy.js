function careOfPuppy(input) {
  let index = 0;
  const foodQuantityKG = Number(input[index++]);
  let currentFoodConsumption = 0;
  let totalFoodConsumed = 0;
    while(currentFoodConsumption !== 'Adopted'){
        totalFoodConsumed += currentFoodConsumption;
        currentFoodConsumption = input[index++]
    }
        totalFoodConsumed += Number(input[index++])
        console.log(totalFoodConsumed)      
}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
