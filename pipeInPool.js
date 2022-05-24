function pipeInPool(input) {
  const poolCapacity = Number(input[0]);
  const pipeOneFlow = Number(input[1]);
  const pipeTwoFlow = Number(input[2]);
  const beenAwayHours = Number(input[3]);
  const firstPipe = pipeOneFlow * beenAwayHours;
  const secondPipe = pipeTwoFlow * beenAwayHours;
  const totalPipesFlow = firstPipe + secondPipe;
  const poolWaterPercent = (totalPipesFlow / poolCapacity) * 100;
  const percentPipeOne = (firstPipe / totalPipesFlow) * 100;
  const percentPipeTwo = (secondPipe / totalPipesFlow) * 100;
  const overflowWater = Math.abs(poolCapacity - totalPipesFlow);
  if (totalPipesFlow <= poolCapacity) {
    console.log(`The pool is ${poolWaterPercent.toFixed(2)}% full. Pipe 1: ${percentPipeOne.toFixed(2)}%. Pipe 2: ${percentPipeTwo.toFixed(2)}%.`);
  } else {
    totalPipesFlow > poolCapacity;
    console.log(`For ${beenAwayHours.toFixed(2)} hours the pool overflows with ${overflowWater.toFixed(2)} liters.`);
  }
}
pipeInPool(["1000", "100", "120", "3"]);
