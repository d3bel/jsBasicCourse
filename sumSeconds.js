function sumSeconds(input) {
  const timeFirst = Number(input[0]);
  const timeSecond = Number(input[1]);
  const timeThird = Number(input[2]);
  const totalTime = timeFirst + timeSecond + timeThird;
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds(["50", "50", "49"]);
