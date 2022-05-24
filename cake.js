function cake(input) {
  let index = 0;
  const lengthCake = Number(input[index++]);
  const widthCake = Number(input[index++]);
  let cakeSize = lengthCake * widthCake;
  let currentPosition = input[index++];
  while (currentPosition !== "STOP") {
      let cakePieces = Number(currentPosition);
      cakeSize -= cakePieces;
      currentPosition = input[index++]
        if(cakeSize <= 0){
      console.log(
        `No more cake left! You need ${Math.abs(cakeSize)} pieces more.`
      ); break;
    } else if(currentPosition === "STOP"){
        console.log(`${cakeSize} pieces are left.`);
        break;
    }
  }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

// (["10",
// "10",
// "20",
// "20",
// "20",
// "20",
// "21"])





// Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта.
// Той обаче не знае колко парчета могат да си вземат гостите от нея.
// Вашата задача е да напишете функция, която изчислява броя на парчетата,
// които гостите са взели, преди тя да свърши.
// Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000])
//  и след това на всеки ред, до получаване на командата "STOP" или докато не свърши тортата,
//  броят на парчетата, които гостите вземат от нея.
// Бележка: Едно парче торта е с размер 1х1 см.
// Да се отпечата на конзолата един от следните редове:
// •	"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
// •	"No more cake left! You need {брой недостигащи парчета} pieces more."
