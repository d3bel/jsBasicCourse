function godzillaVersusKong(input) {
  const filmBudget = Number(input[0]);
  const stuntman = Number(input[1]);
  let clothsPricePerStuntman = Number(input[2]);
  const decorPrice = filmBudget * 0.1;
  if (stuntman > 150) {
    clothsPricePerStuntman *= 0.9;
  }
  const totalexpenses = clothsPricePerStuntman * stuntman + decorPrice;
  const difference = Math.abs(filmBudget - totalexpenses).toFixed(2);
  if (totalexpenses <= filmBudget) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${difference} leva left.`);
  } else {
    totalexpenses > filmBudget
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${difference} leva more.`);
  }
}
godzillaVersusKong(["9587.88", "222", "55.68"]);
