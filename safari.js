function safari(input){
    const budget = Number(input[0]);
    const fuelNeed = Number(input[1]);
    const dayOfTheWeek = input[2];
     const fuelPerLiter = 2.1;
     const guidePrice = 100;
     const totalFuelPrice = fuelNeed * fuelPerLiter;
     let total = totalFuelPrice + guidePrice;
      if (dayOfTheWeek === "Saturday"){
          total *= 0.9;
    } else {
        total *= 0.8;
    } const difference = Math.abs(budget - total);
    if (budget >= total){
        console.log(`Safari time! Money left: ${difference.toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${difference.toFixed(2)} lv.`)
    }
}
safari(["120",
"30",
"Saturday"])



// Симона и Светлин ще ходят на почивка в Африка и искат да отидат на сафари.
//  Понеже за делничните дни вече имат планове, решават, че ще отидат събота или неделя.
//   Напишете програма, която изчислява колко ще им струва ходенето на сафари и дали бюджетът им ще им стигне да отидат,
//    като имате предвид следното:
// •	Цената на един литър гориво е 2.10 лв.
// •	Цената за екскурзовод е 100лв.
// •	В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%
// Вход
// От конзолата се четат 3 реда:
// •	Бюджет – реално число в интервала [0.00… 10000.00]
// •	Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
// •	Ден от седмицата – текст с възможности "Saturday" и "Sunday" 
// Изход
// Да се отпечата на конзолата един ред:  
// •	Ако бюджетът е достатъчен:
// "Safari time! Money left: {колко пари са им останали} lv. "
// •	Ако бюджетът не е достатъчен:
// "Not enough money! Money needed: {колко пари не им достигат} lv."
// Сумите трябва да са форматирани до втория знак след десетичната запетая.
