function walking(input) {
  const goalSteps = 10000;
  let index = 0;
  let homeTime = input[index++];
  let stepsCounter = 0;
  let diff = 0;

  while (homeTime !== "Going home") {
    let currSteps = Number(homeTime);
    stepsCounter += currSteps;
    if (stepsCounter >= goalSteps) {
      diff = Math.abs(goalSteps - stepsCounter);
      console.log(`Goal reached! Good job!\n${diff} steps over the goal!`);
      break;
    }
    homeTime = input[index++];
  }
  if (homeTime === "Going home") {
    let walkingHome = Number(input[index++]);
    stepsCounter += walkingHome;
    diff = Math.abs(goalSteps - stepsCounter);
    if (stepsCounter >= goalSteps) {
      console.log(`Goal reached! Good job!\n${diff} steps over the goal!`);
    } else {
      console.log(`${diff} more steps to reach goal.`);
    }
  }
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

;

// Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си.
// Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза
//  през деня и когато постигне целта си да се изписва "Goal reached! Good job!"
//   и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките,
//  които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си,
//  на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."
