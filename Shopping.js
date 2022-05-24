function shopping(input) {
  const petersBudget = Number(input[0]);
  const gpuQuantity = Number(input[1]);
  const cpuQuantity = Number(input[2]);
  const ramQuantity = Number(input[3]);
  const priceGPU = 250;
  const priceCPU = priceGPU * gpuQuantity * 0.35;
  const priceRAM = priceGPU * gpuQuantity * 0.1;
  let totalPrice =
    priceGPU * gpuQuantity + priceCPU * cpuQuantity + priceRAM * ramQuantity;
  if (gpuQuantity > cpuQuantity) {
    totalPrice *= 0.85;
  }
  const difference = Math.abs(petersBudget - totalPrice).toFixed(2);
  if (petersBudget >= totalPrice) {
    console.log(`You have ${difference} leva left!`);
  } else {
    console.log(`Not enough money! You need ${difference} leva more!`);
  }
}
shopping(["920.45", "3", "1", "1"]);
