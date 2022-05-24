function fishingBoat(input) {
  const groupBudget = Number(input[0]);
  const season = input[1];
  const fishermanNumber = Number(input[2]);
  const rentPriceSpring = 3000;
  const rentPriceSummerAndAutumn = 4200;
  const rentPriceWinter = 2600;
  let total = 0;
  switch (season) {
    case "Summer":
    case "Autumn":
      total = rentPriceSummerAndAutumn;
      break;
    case "Spring":
      total = rentPriceSpring;
      break;
    case "Winter":
      total = rentPriceWinter;
      break;
  }
  if (fishermanNumber <= 6) {
    total -= total * 0.1;
  } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
    total -= total * 0.15;
  } else {
    total -= total * 0.25;
  }
  if (season != "Autumn" && fishermanNumber % 2 === 0) {
    total -= total * 0.05;
  }
  if (groupBudget >= total) {
    const moneyLeft = groupBudget - total;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    const moneyNeeded = total - groupBudget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}
fishingBoat(["2000",
"Winter",
"13"])
;
