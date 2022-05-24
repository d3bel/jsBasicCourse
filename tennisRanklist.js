function tennisRanklist(input) {
  let index = 0;
  const tournamentCount = Number(input[index]);
  index++;
  const beginingPoints = Number(input[index]);
  index++;
  let totalPoints = 0;
  let winsCounter = 0;

  for (let i = 0; i < tournamentCount; i++) {
    let tournamentStage = input[index];
    index++;
    switch (tournamentStage) {
      case "W":
        totalPoints += 2000;
        winsCounter +=1;
        break;
      case "F":
        totalPoints += 1200;
        break;
      case "SF":
        totalPoints += 720;
        break;
    }
  }
    let averagePoints = Math.floor(totalPoints / tournamentCount);
    totalPoints += beginingPoints;
    let winPercentige = (winsCounter / tournamentCount * 100).toFixed(2);
    console.log(`Final points: ${totalPoints}\nAverage points: ${averagePoints}\n${winPercentige}%`)
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

