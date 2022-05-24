function christmasGifts(input) {
  let index = 0;
  let kidsPresent = 5;
  let kidsNum = 0;
  let toysCost = 0;
  let adultPresent = 15;
  let adultNum = 0;
  let sweatersCost = 0;
  let christmas = input[index++];

  while (christmas !== "Christmas") {
    let currentAge = Number(christmas);
    if (christmas <= 16) {
      kidsNum++;
      toysCost += kidsPresent;
    } else {
      adultNum++;
      sweatersCost += adultPresent;
    }
    christmas = input[index++];
  }
  console.log(`Number of adults: ${adultNum}\nNumber of kids: ${kidsNum}`);
  console.log(`Money for toys: ${toysCost}\nMoney for sweaters: ${sweatersCost}`);
}
christmasGifts(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])



// Коледа наближава и Иван решава да купи по един подарък за всеки от семейството си.
//  Той си прави списък с хората, на които иска да подари нещо. Това, какъв подарък ще купи зависи от възрастта на хората в списъка му:
// •	Всички до 16 (вкл.) години се считат за деца и ще получат играчка
// •	Всички над 16 години се считат за възрастни и ще получат коледен пуловер
// •	Цената на всяка играчка е 5 лв., а цената на един пуловер е 15 лв.
// Напишете програма, която пресмята колко души от семейството на Иван са до 16 (вкл.) години и колко са над тази възраст,
//  също и колко пари ще струват подаръците на децата и възрастните.
// Вход:
// От конзолата се четат поредица от редове до получаване на команда "Christmas":
// •	Годините на всеки член от семейството - цяло число в интервала [1 … 130]
// Изход:
// Да се отпечатат на конзолата четири реда:
// •	"Number of adults: {брой хора над 16 години}"
// •	"Number of kids: {брой хора до 16 (вкл.) години}"
// •	"Money for toys: {сумата за всички играчки}"
// •	"Money for sweaters: {сума за всички пуловери}"
