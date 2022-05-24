function oddOrEvenPosition(input) {
  const number = Number(input[0]);
  let oddSum = 0;
  let oddMax = Number.NEGATIVE_INFINITY;
  let oddMin = Number.POSITIVE_INFINITY;
  let evenSum = 0;
  let evenMax = Number.NEGATIVE_INFINITY;
  let evenMin = Number.POSITIVE_INFINITY;
  for (let i = 1; i <= number; i++) {
    let checkNum = Number(input[i]);
    if (i % 2 === 0) {
      evenSum += Number(input[i]);
      if (checkNum > evenMax) {
        evenMax = checkNum;
      } if (i < evenMin) {
        evenMin = checkNum;
      }
    } else {
      oddSum += Number(input[i]);
      if (checkNum > oddMax) {
        oddMax = checkNum;
      } if (checkNum < oddMin) {
        oddMin = checkNum;
      }
    }
  }
  if (evenSum === 0) {
    console.log(`Odd Sum = ${oddSum}, Odd Min = ${oddMin}, Odd Max = ${oddMax}, Even Sum = 0, Even Min = No, Even Max = No`);
  } else if (oddSum === 0) {
    console.log(`Odd Sum = 0, Odd Min = No, Odd Max = No, Even Sum = ${evenSum}, Even Min = ${evenMin},Even Max = ${evenMax}`);
  } else {
    console.log(`Odd Sum = ${oddSum}, Odd Min = ${oddMin}, Odd Max = ${oddMax}, Even Sum = ${evenSum}, Even Min = ${evenMin}, Even Max = ${evenMax}`);
  }
}
oddOrEvenPosition(["6", "2", "3", "5","4","2","1"]);

// 5
//  3
//  -2
//  8
//  11
//  -3

// 6
// 2
// 3
// 5
// 4
// 2
// 1
