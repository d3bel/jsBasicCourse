function toyShop(input) {
  const puzzlePrice = 2.6;
  const talkingDollPrice = 3;
  const teddyBearPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2;
  const vacationPrice = Number(input[0]);
  const quantityPuzzle = Number(input[1]);
  const quantityTalkingDoll = Number(input[2]);
  const quantityTeddyBear = Number(input[3]);
  const quantityMinions = Number(input[4]);
  const quantityTrucks = Number(input[5]);
  const totalQuantityToys =
    quantityPuzzle +
    quantityTalkingDoll +
    quantityTeddyBear +
    quantityMinions +
    quantityTrucks;
  let totalToysPrice =
    quantityPuzzle * puzzlePrice +
    quantityTalkingDoll * talkingDollPrice +
    quantityTeddyBear * teddyBearPrice +
    quantityMinions * minionPrice +
    quantityTrucks * truckPrice;
  if (totalQuantityToys >= 50) {
    totalToysPrice *= 0.75;
  }
  const profitAfterRent = totalToysPrice * 0.9;
  const difference = Math.abs(profitAfterRent - vacationPrice).toFixed(2);
  if (profitAfterRent >= vacationPrice) {
    console.log(`Yes! ${difference} lv left.`);
  } else if (profitAfterRent < vacationPrice) {
    console.log(`Not enough money! ${difference} lv needed.`);
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
