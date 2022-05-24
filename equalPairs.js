function equalPairs(input) {
    let index = 0;
    const numbersCount = Number(input[index++]);
    let firstSumOfPairNums = 0;
    let secondSumOfPairNums = 0;
    let singleValueOfPair = 0;
    let maxDiff = 0;
    if (numbersCount === 1) {
      firstSumOfPairNums = Number(input[index++]);
      secondSumOfPairNums = Number(input[index]);
      singleValueOfPair = firstSumOfPairNums + secondSumOfPairNums;
      console.log(`Yes, value=${singleValueOfPair}`);
    } else {
      for (let i = 0; i < numbersCount / 2; i++) {
        let firstNumOfThePair = Number(input[index++]);
        let secondNumOfThePair = Number(input[index++]);
        firstSumOfPairNums = firstNumOfThePair + secondNumOfThePair;
        maxDiff = firstSumOfPairNums - secondSumOfPairNums;
        if (numbersCount % 2 !== 0) {
          if (i == (numbersCount - 1) / 2) {
            break;
          }
        }
        for (let j = 0; j < numbersCount; j++) {
          let thirdNumPair = Number(input[index++]);
          let fourthNumPair = Number(input[index++]);
          secondSumOfPairNums = thirdNumPair + fourthNumPair;
          if (firstSumOfPairNums !== secondSumOfPairNums) {
            maxDiff = firstSumOfPairNums - secondSumOfPairNums;
          }
          break;
        }
      }
      if (firstSumOfPairNums === secondSumOfPairNums) {
        console.log(`Yes, value=${firstSumOfPairNums}`);
      } else {
        console.log(`No, maxdiff=${Math.abs(maxDiff)}`);
      }
    }
  }
  equalPairs(["1", "5", "5"]);
  equalPairs([
    "7",
    "34",
    "-33",
    "52",
    "12",
    "-32",
    "32",
    "23",
    "41",
    "7",
    "25",
    "34",
    "23",
    "124",
    "21",
  ]);
  equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
  equalPairs(["2", "1", "2", "2", "2"]);
  equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
  equalPairs(["2", "-1", "0", "0", "-1"]);