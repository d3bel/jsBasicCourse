function goldMine(input) {
  let index = 0;
  let locationQuantity = Number(input[index++]);
  let totalGoldPerLocation = 0;
  let dayCount = 0;
  for (let i = 0; i < locationQuantity; i++) {
    let expectationGoldPerDay = Number(input[index++]);
    let daysPerLocation = Number(input[index++]);
    let diff = 0;
    for (let j = 0; j < daysPerLocation; j++) {
      let currentDayGold = Number(input[index++]);
      dayCount++;
      totalGoldPerLocation += currentDayGold;
      if (dayCount === daysPerLocation) {
        diff = totalGoldPerLocation / daysPerLocation;
        if (diff >= expectationGoldPerDay) {
          console.log(`Good job! Average gold per day: ${diff.toFixed(2)}.`);
        } else {
          console.log(
            `You need ${Math.abs(expectationGoldPerDay - diff).toFixed(
              2
            )} gold.`
          );
        }
        totalGoldPerLocation = 0;
        dayCount = 0;
      }
    }
  }
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])
;

// Група ентусиасти обикалят по различни локации, където има златни мини.
//  Вашата задача е да им помогнете като напишете програма, която да приема броя на локациите и очакван среден добив на злато за ден за една локация.
//   За всеки ден ще получавате колко злато са добили на локацията. Проверете дали са постигнали очаквания добив за дадена локация или не.
// Вход:
// Първоначално от конзолата се прочита едно число – брой локации – цяло число в интервала [1.. 100]
// За всяка една локация се четат две числа, по едно на ред:
// 1.	На първия ред – очакван среден добив на ден злато – реално число в интервала [0.00.. 10000.00]
// 2.	На втория ред – брой дни, в който ще се копае на дадената локация – цяло число в интервала [1.. 30]
// За всеки ден се чете по едно число:
// •	Добито злато за деня – реално число в интервала [0.00.. 1000.00]
// Изход:
// След приключване на копаенето на дадена локация се печата един ред според случая:
// •	Ако средният добив злато за ден достига или надвишава очаквания среден добив на ден злато:
// o	"Good job! Average gold per day: {среден добив на ден за дадената локация}."
// •	Ако средният добив злато за ден е под очаквания среден добив на ден злато:
// o	"You need {злато, което не е достигнало за достигане на очакваният среден добив} gold."
// Резултатът да бъде форматиран до вторият знак след десетичният разделител.
