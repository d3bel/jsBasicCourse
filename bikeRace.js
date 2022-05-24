function bikeRace(input) {
  const jrCyclists = Number(input[0]);
  const seniorCyclists = Number(input[1]);
  const trackType = input[2];
  let totalCost = 0;
  switch (trackType) {
    case "trail":
      totalCost = jrCyclists * 5.5 + seniorCyclists * 7;
      break;
    case "cross-country":
      totalCyclists = seniorCyclists + jrCyclists;
      if (totalCyclists >= 50) {
        totalCost = jrCyclists * 8 + seniorCyclists * 9.5;
        totalCost *= 0.75;
      } else {
        totalCost = jrCyclists * 8 + seniorCyclists * 9.5;
      }
      break;
    case "downhill":
      totalCost = jrCyclists * 12.25 + seniorCyclists * 13.75;
      break;
    case "road":
      totalCost = jrCyclists * 20 + seniorCyclists * 21.5;
      break;
  }
  const expenses = totalCost * 0.05;
  const finalSum = (totalCost - expenses).toFixed(2);
  console.log(`${finalSum}`);
}
bikeRace(["30", "25", "cross-country"]);
