function flowers(input) {
  const chrysanthemums = Number(input[0]);
  const roses = Number(input[1]);
  const tulips = Number(input[2]);
  const season = input[3];
  const holiday = input[4];
  const totalQuantityFlowers = chrysanthemums + tulips + roses;
  let totalCost = 0;
  switch (season) {
    case "Spring":
      totalCost = chrysanthemums * 2 + roses * 4.1 + tulips * 2.5;
      if (holiday === "Y") {
        totalCost += totalCost * 0.15;
        if (tulips > 7) {
          totalCost *= 0.95;
        }
      } else if (tulips > 7) {
        totalCost *= 0.95;
      }
      break;
    case "Summer":
      totalCost = chrysanthemums * 2 + roses * 4.1 + tulips * 2.5;
      if (holiday === "Y") {
        totalCost += totalCost * 0.15;
      }
      break;
    case "Autumn":
      totalCost = chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15;
      if (holiday === "Y") {
        totalCost += totalCost * 0.15;
      }
      break;
    case "Winter":
      totalCost = chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15;
      if (holiday === "Y") {
        totalCost += totalCost * 0.15;
      } else if (roses >= 10) {
        totalCost *= 0.9;
      }
      break;
  }
  if (totalQuantityFlowers > 20) {
    totalCost *= 0.8;
  }
  const finalPrice = (totalCost + 2).toFixed(2);
  console.log(`${finalPrice}`);
}
flowers(["10", "10", "10", "Autumn", "N"]);
