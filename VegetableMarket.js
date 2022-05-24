function vegetableMarket(input) {
  const firstRollVeg = Number(input[0]);
  const secondRollFruit = Number(input[1]);
  const thirdRollVegPerKg = Number(input[2]);
  const forthRollFruitPerKg = Number(input[3]);
  const euroCurrency = 1.94;
  const totalInEuroProfit =
    (firstRollVeg * thirdRollVegPerKg + secondRollFruit * forthRollFruitPerKg) /
    euroCurrency;
  console.log(totalInEuroProfit.toFixed(2));
}
vegetableMarket(["1.5", "2.5", "10", "10"]);
