function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let totalCost = 0;
  switch (season) {
    case "summer":
      if (budget <= 100) {
        totalCost = budget * 0.3;
        console.log("Somewhere in Bulgaria");
        console.log(`Camp - ${totalCost.toFixed(2)}`);
      } else if (budget <= 1000) {
        totalCost = budget * 0.4;
        console.log("Somewhere in Balkans");
        console.log(`Camp - ${totalCost.toFixed(2)}`);
      } else {
        totalCost = budget * 0.9;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${totalCost.toFixed(2)}`);
      } break;
    case "winter":
      if (budget <= 100) {
        totalCost = budget * 0.7;
        console.log("Somewhere in Bulgaria");
        console.log(`Hotel - ${totalCost.toFixed(2)}`);
      } else if (budget <= 1000) {
        totalCost = budget * 0.8;
        console.log("Somewhere in Balkans");
        console.log(`Hotel - ${totalCost.toFixed(2)}`);
      }  else {
        totalCost = budget * 0.9;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${totalCost.toFixed(2)}`);
      } break;
  }
}
// journey(["50", "summer"]);
// // Somewhere in Bulgaria
// // Camp - 15.00
// journey(["75", "winter"]);
// // Somewhere in Bulgaria
// // Hotel - 52.50
// journey(["312", "summer"]);
// // Somewhere in Balkans
// // Camp - 124.80
// journey(["678.53", "winter"]);
// Somewhere in Balkans
// Hotel - 542.82
journey(["1500", "summer"]);
// Somewhere in Europe
// Hotel - 1350.00

//  Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
// Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи.
//  Ако е лято ще почива на къмпинг, а зимата в хотел.
//  Ако е в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел,
//   според дестинацията, има собствена цена която отговаря на даден процент от бюджета:
// •	При 100лв. или по-малко – някъде в България
// o	Лято – 30% от бюджета
// o	Зима – 70% от бюджета
// •	При 1000лв. или по малко – някъде на Балканите
// o	Лято – 40% от бюджета
// o	Зима – 80% от бюджета
// •	При повече от 1000лв. – някъде из Европа
// o	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.

// Вход
// Приемат се 2 аргумента :
// •	Първи– Бюджет, реално число в интервала [10.00...5000.00].
// •	Втори–  Един от двата възможни сезона: "summer" или "winter"

// Изход
// На конзолата трябва да се отпечатат два реда.
// •	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
// •	Втори ред – "{Вид почивка} – {Похарчена сума}"
// o	Почивката може да е между "Camp" и "Hotel"
// o	Сумата трябва да е закръглена с точност до вторият знак след запетаята.
