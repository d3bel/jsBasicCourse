function bestPlayer(input) {
  let index = 0;
  let playerName = "";
  let goalsScored = 0;
  let mostGoals = 0;
  let bestPlayer = "";

  for (let i = 0; i < Number.POSITIVE_INFINITY; i++) {
    let checkEND = input[index];
    if (checkEND === "END") {
      break;
    }
    playerName = input[index++];
    goalsScored = Number(input[index++]);
    if (goalsScored > mostGoals) {
      bestPlayer = playerName;
      mostGoals = goalsScored;
      if (goalsScored >= 10) {
        mostGoals = goalsScored;
        break;
      }
    }
  }
  console.log(`${bestPlayer} is the best player!`);
  if (goalsScored >= 3) {
    console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${mostGoals} goals.`);
  }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);