function skiTrip(input) {
  const daysStaying = Number(input[0]);
  const typeHotelRoom = input[1];
  const feedback = input[2];

  const priceRoomForOnePerson = 18;
  const priceApartment = 25;
  const pricePresidentApartment = 35;
  const numberOfNights = daysStaying - 1;
  let totalCost = 0;
  switch (typeHotelRoom) {
    case "president apartment":
      totalCost = numberOfNights * pricePresidentApartment;
      if (daysStaying < 10) {
        totalCost *= 0.9;
      } else if (daysStaying > 10 && daysStaying < 15) {
        totalCost *= 0.85;
      } else {
        totalCost *= 0.8;
      }
      break;
    case "apartment":
      totalCost = numberOfNights * priceApartment;
      if (daysStaying < 10) {
        totalCost *= 0.7;
      } else if (daysStaying > 10 && daysStaying < 15) {
        totalCost *= 0.65;
      } else {
        totalCost *= 0.5;
      }
      break;
    default:
      totalCost = numberOfNights * priceRoomForOnePerson;
      break;
  }
  if (feedback === "positive") {
    totalCost += totalCost * 0.25;
  } else {
    totalCost -= totalCost * 0.1;
  }
  console.log(`${totalCost.toFixed(2)}`);
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);

// Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя.
//  Налични са следните видове помещения, със следните цени за престой:
// 	"room for one person" – 18.00 лв за нощувка
// 	"apartment" – 25.00 лв за нощувка
// 	"president apartment" – 35.00 лв за нощувка
// Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно намаление.
// Намаленията са както следва:
//                              вид помещение    |    по-малко от 10 дни      |       между 10 и 15 дни     |     повече от 15 дни
//                           room for one person |  не ползва намаление       |      не ползва намаление    |    не ползва намаление
//                            apartment          |  30% от крайната цена      |     35% от крайната цена    |   50% от крайната цена
//                          president apartment  | 10% от крайната цена       |     15% от крайната цена    |   20% от крайната цена
// След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) .
//  Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.

// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - дни за престой - цяло число в интервала [0...365]
// •	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
// •	Трети ред - оценка - "positive"  или "negative"

// Изход
// На конзолата трябва да се отпечата един ред:
// •	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.
