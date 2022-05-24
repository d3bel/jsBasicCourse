function addBags(input) {
  const luggagePriceOver20kg = Number(input[0]);
  const kilosOfLuggage = Number(input[1]);
  const dueFlyingDays = Number(input[2]);
  const luggageQuantity = Number(input[3]);

  let luggagePrice = 0;
  if (kilosOfLuggage < 10) {
    luggagePrice = luggagePriceOver20kg * 0.2;
    if (dueFlyingDays > 30) {
      luggagePrice += luggagePrice * 0.1;
    } else if (dueFlyingDays >= 7 && dueFlyingDays <= 30) {
      luggagePrice += luggagePrice * 0.15;
    } else {
      dueFlyingDays < 7;
      luggagePrice += luggagePrice * 0.4;
    }
  } else if (kilosOfLuggage >= 10 && kilosOfLuggage <= 20) {
    luggagePrice = luggagePriceOver20kg * 0.5;
    if (dueFlyingDays > 30) {
      luggagePrice += luggagePrice * 0.1;
    } else if (dueFlyingDays >= 7 && dueFlyingDays <= 30) {
      luggagePrice += luggagePrice * 0.15;
    } else {
      dueFlyingDays < 7;
      luggagePrice += luggagePrice * 0.4;
    }
  } else {
    luggagePrice += luggagePriceOver20kg;
    if (dueFlyingDays > 30) {
      luggagePrice += luggagePrice * 0.1;
    } else if (dueFlyingDays >= 7 && dueFlyingDays <= 30) {
      luggagePrice += luggagePrice * 0.15;
    } else {
      dueFlyingDays < 7;
      luggagePrice += luggagePrice * 0.4;
    }
  }
  let total = luggagePrice * luggageQuantity;
  console.log(`The total price of bags is: ${total.toFixed(2)} lv. `);
}
addBags(["63.80", "23", "3", "1"]);
