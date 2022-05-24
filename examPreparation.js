function examPreparation(input) {
  let index = 0;
  let numsOfLowGrade = Number(input[index++]);
  let subject = input[index++];
  let totalGrade = 0;
  let subCount = 0;
  let currentSubject = "";
  let booleanCheck = false;
  let lowGradeCount = 0;

  while (subject !== "Enough") {
    currentSubject = subject;
    subCount++;

    let currentGrade = Number(input[index++]);
    subject = input[index++];
    totalGrade += currentGrade;
    if (currentGrade <= 4) {
      lowGradeCount++;
      if (lowGradeCount >= numsOfLowGrade) {
        console.log(`You need a break, ${lowGradeCount} poor grades.`);
        booleanCheck = true;
        break;
      }
    }
  }
  if (!booleanCheck) {
    let averageScore = totalGrade / subCount;
    console.log(
      `Average score: ${averageScore.toFixed(2)}\nNumber of problems: ${subCount}\nLast problem: ${currentSubject}`
    );
  }
}
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);