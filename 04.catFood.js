function catFood(input){
    const catsQuantity = Number(input[0]);
    const foodPricePerKG = 12.45;
    let groupSmall = 0;
    let groupBig = 0;
    let groupHuge = 0;
    let totalFood = 0;
        for(let i = 1; i <= catsQuantity; i++){
            let currentCatRation = Number(input[i]);
            if(currentCatRation >= 100 && currentCatRation < 200){
                totalFood += currentCatRation;
                groupSmall++;
            } else if(currentCatRation >= 200 && currentCatRation < 300){
                totalFood += currentCatRation;
                groupBig++;
            } else if(currentCatRation >= 300 && currentCatRation < 400){
                totalFood += currentCatRation;
                groupHuge++;
            }
        }
        let totalFoodPerDay = totalFood / 1000;
        let costPerDay = totalFoodPerDay * foodPricePerKG;
            console.log(`Group 1: ${groupSmall} cats.`);
            console.log(`Group 2: ${groupBig} cats.`);
            console.log(`Group 3: ${groupHuge} cats.`);
            console.log(`Price for food per day: ${costPerDay.toFixed(2)} lv.`);
}
catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])


// В приют за животни има определен брой котки, които изяждат различно количество храна на ден.
//  Задачата ви е да изчислите колко е броят на котките във всяка група и парите,
//   които са нужни на собственика за храната им за един ден, ако 1 кг храна = 12.45 лева.
// •	Ако котката изяжда от 100 (вкл.)  до 200 грама, то тя попада в група 1: малки котки.
// •	Ако котката изяжда от 200 (вкл.)  до 300 грама, то тя попада в група 2: големи котки.
// •	Ако котката изяжда от 300 (вкл.)  до 400 грама, то тя попада в група 3: огромни котки.
// Вход:
// •	На първи ред - броят на котките - цяло число в интервала [1..100]
// •	На всеки следващ ред за всяка котка - Х грама храна - реално число в интервала [100.00..400.00]
// Изход:
// Отпечатват се следните редове:
// "Group 1: {броят на котките в група 1: малки котки} cats."
// "Group 2: {броят на котките в група 2: големи котки} cats."
// "Group 3: {броят на котките в група 3: огромни котки} cats."
// "Price for food per day: {цената за храната} lv."
// Цената на храната трябва да бъде закръглена до втория знак след десетичната запетая.
