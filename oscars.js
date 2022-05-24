function oscars(input) {
  let index = 0;
  const actorName = input[index];
  index++;
  const academyPoint = Number(input[index]);
  index++;
  const juryCounter = Number(input[index]);
  index++;
  const nomineePointsNeeded = 1250.5;
  let booleanCheck = false;
  let currPoints = academyPoint;

  for (let i = 0; i < juryCounter; i++) {
    let juryName = input[index];
    index++;
    let juriPoints = Number(input[index]);
    index++;
    currPoints += (juryName.length * juriPoints) / 2;
    if (currPoints >= nomineePointsNeeded) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${currPoints.toFixed(
          1
        )}!`
      );
      booleanCheck = true;
      break;
    }
  }
  let diff = Math.abs(nomineePointsNeeded - currPoints);
  if (!booleanCheck) {
    console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
  }
}
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
