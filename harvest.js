function harvest(input) {
  const squareMeters = Number(input[0]);
  const grapePerSqMeter = Number(input[1]);
  const wineNeededLiters = Number(input[2]);
  const workers = Number(input[3]);

  const totalGrapes = squareMeters * grapePerSqMeter;
  const landForWine = (totalGrapes * 0.4) / 2.5;
  const difference = Math.abs(landForWine - wineNeededLiters);
  const winePerWorker = difference / workers;
  if (landForWine < wineNeededLiters) {
    console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`);
  } else if (landForWine > wineNeededLiters) {
    console.log(`Good harvest this year! Total wine: ${Math.floor(landForWine)} liters.`);
    console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
  }
}
harvest(["650", "2", "175", "3"]);






// function harvest(input) {
//   const wineyard = Number(input[0]);
//   const grapesPerSqM = Number(input[1]);
//   const neededWine = Number(input[2]);
//   const workers = Number(input[3]);

//   const totalGrapes = wineyard * grapesPerSqM;
//   const wine = (totalGrapes * 0.4) / 2.5;
//   const residue = Math.abs(wine - neededWine);
//   const winePerWorker = residue / workers;
//   if (wine < neededWine) {
//       console.log(`It will be a tough winter! More ${Math.floor(residue)} liters wine needed.`);
//   } else {
//       console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
//       console.log(`${Math.ceil(residue)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);

//   }
// }