function streamOfLetters(input) {
  let index = 0;
  let command = input[index++];
  let text = "";
  let cCount = 0;
  let oCount = 0;
  let nCount = 0;
  let currentWord = "";

  while (command !== "End") {
    if ((command >= "a" && command <= "z") || (command >= "A" && command <= "Z")) {
      switch (command) {
        case "c":
          if (cCount === 1) {
            currentWord += command;
          } else {
            cCount++;
          }
          break;
        case "o":
          if (oCount === 1) {
            currentWord += command;
          } else {
            oCount++;
          }
          break;
        case "n":
          if (nCount === 1) {
            currentWord += command;
          } else {
            nCount++;
          }
          break;
        default:
          currentWord += command;
        break;
      }
    }
    if (cCount === 1 && oCount === 1 && nCount === 1) {
      text +=currentWord + " ";
      currentWord = "";
      cCount = 0;
      oCount = 0;
      nCount = 0;
    }
    command = input[index++];
  }
  console.log(text);
}
streamOfLetters([
  "H",
  "n",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
]);
// streamOfLetters(["%","!","c","^","B","`","o","%","o","o","M",")","{","n","\"","A","D","End"])

// Напишете програма, която прочита скрито съобщение в поредица от символи.
// Те се получават по един на ред до получаване на командата "End". Думите се образуват от буквите в реда на четенето им.
// Символите, които не са латински букви трябва да бъдат игнорирани.
// Думите скрити в потока са разделени от тайна команда от три букви – "c", "o" и "n".
// При първото получаване на една от тези букви, тя се маркира като срещната, но не се запазва в думата.
// При всяко следващо нейно срещане се записва нормално в думата. След като са налични и трите символа от командата,
//  се печата думата и интервал " ". Започва се нова дума, която по същия начин чака тайната команда, за да бъде отпечатана.
// Вход
// От конзолата се чете поредица от редове с един символ на всеки до получаване на командата "End".
// Изход
// На конзолата се печата на един ред всяка дума след тайната команда, следвана от интервал.
