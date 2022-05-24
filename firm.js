function firm(input) {
  const neededHours = Number(input[0]);
  const dueDay = Number(input[1]);
  const employes = Number(input[2]);

  const educationTakes = dueDay * 0.9;
  const shiftDuration = educationTakes * 8;
  const overtimeShift = employes * 2 * dueDay;
  const totalHours = Math.floor(shiftDuration + overtimeShift);
  const hoursLess = Math.abs (neededHours - totalHours);
  if (neededHours <= totalHours) {
    const hoursLeft = totalHours - neededHours;
    console.log(`Yes!${hoursLeft} hours left.`);
  }
  else {
      console.log(`Not enough time!${hoursLess} hours needed.`)
  }
}
firm(["50", "5", "2"]);

// Фирма получава заявка за изработването на проект, за който са необходими определен брой часове.
//  Фирмата разполага с определен брой дни. През 10% от дните служителите са на обучение и не могат да работят по проекта.
//   Един нормален работен ден във фирмата е 8 часа. Всеки служител може да работи по проекта в извънработно време по 2 часа на ден.
// Часовете трябва да са закръглени към по-ниско цяло число (Например –> 6.98 часа се закръглят на 6 часа).
// Напишете програма, която изчислява дали фирмата може да завърши проекта навреме и колко часа не достигат или остават.
// Вход
// Входът се чете от конзолата и съдържа точно 3 реда:
// •	На първия ред са необходимите часовете – цяло число в интервала [0 ... 200 000]
// •	На втория ред са дните, с които фирмата разполага – цяло число в интервала [0 ... 20 000]
// •	На третия ред е броят на служителите, работещи извънредно – цяло число в интервала [0 ... 200]
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако времето е достатъчно:
// o	“Yes!{оставащите часове} hours left.”
// •	Ако  времето НЕ Е достатъчно:
// o	“Not enough time!{недостигащите часове} hours needed.“
