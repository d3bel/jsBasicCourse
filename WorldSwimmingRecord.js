function worldSwimmingRecord(input) {
  const worldRecord = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const timePerMeterSwimming = Number(input[2]);
  const timeDistance = distanceInMeters * timePerMeterSwimming;
  const totalWaterResistance = Math.floor(distanceInMeters / 15) * 12.5;
  const totalTime = (timeDistance + totalWaterResistance).toFixed(2);
  const difference = Math.abs(totalTime - worldRecord).toFixed(2);
  if (totalTime < worldRecord) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime} seconds.`
    );
  } else {
    totalTime > worldRecord;
    console.log(`No, he failed! He was ${difference} seconds slower.`);
  }
}

worldSwimmingRecord(["10464", "1500", "20"]);
