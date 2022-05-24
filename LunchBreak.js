function lunchBrake(input) {
  const tvProgramName = input[0];
  const episodeLenght = Number(input[1]);
  const brakeDuration = Number(input[2]);
  const lunchTime = (brakeDuration * 1) / 8;
  const restTime = (brakeDuration * 1) / 4;
  const remainingTime = Math.abs(brakeDuration - lunchTime - restTime);
  const difference = Math.abs(remainingTime - episodeLenght);
  if (remainingTime >= episodeLenght) {
    console.log(
      `You have enough time to watch ${tvProgramName} and left with ${Math.ceil(
        difference
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${tvProgramName}, you need ${Math.ceil(
        difference
      )} more minutes.`
    );
  }
}
lunchBrake(["Game of Thrones", "60", "96"]);
