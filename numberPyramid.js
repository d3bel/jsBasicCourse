function numberPyramid(input) {
  let number = Number(input[0]);
  let currNum = 0;
  let boolean = false;
  for (let i = 1; i <= number; i++) {
    let totalNum = "";
    for (let j = 1; j <= i; j++) {
      currNum++;
      totalNum += currNum + " ";
      if (currNum === number) {
        boolean = true;
        break;
      }
    }
    console.log(`${totalNum}`);
    if (boolean) {
      break;
    }
  }
}
numberPyramid(["12"]);
