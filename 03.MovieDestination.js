function movieDestination(input){
    const budget = Number(input[0]);
    const distance = input[1];
    const season = input[2];
    const numOfDays = Number(input[3]);
    let filmExpenses = 0;
    if(season === "Winter"){
        switch(distance){
            case "Dubai" :
                filmExpenses += (45000 * numOfDays) * 0.7;
                break;
            case "Sofia" :
                filmExpenses += (17000 * numOfDays) * 1.25;
                break;
            case "London" :
                filmExpenses += 24000 * numOfDays;
                break;
        } 
    } else {
        switch(distance){
            case "Dubai" :
                filmExpenses += (40000 * numOfDays) * 0.7;
                break;
            case "Sofia" :
                filmExpenses += (12500 * numOfDays) * 1.25;
                break;
            case "London" :
                filmExpenses += 20250 * numOfDays;
                break;
        }
    } let diff = Math.abs(budget - filmExpenses);
    if(budget >= filmExpenses){
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    } else{
        console.log(`The director needs ${diff.toFixed(2)} leva more!`)
    }
}
movieDestination(["400000","Sofia","Winter","20"]);
movieDestination(["1000000","Dubai","Summer","5"]);
movieDestination(["200000","London","Summer","7"]);


// Режисьорът на голяма кино продукция иска да разбере дали бюджетът, който са му отпуснали ще
// стигне за заснемане на филма. Помогнете му, като напишете програма, която изчислява колко ще
// му струва да заснеме филма, като знаете колко излиза един снимачен ден. Цената за един ден
// се определя от сезона и дестинацията:
//          Дестинация

// Сезон      Dubai         Sofia         London
// Winter     45 000 lv.    17 000 lv.    24 000 lv.
// Summer     40 000 lv.    12 500 lv.    20 250 lv.
// Съществуват следните данъчни облекчения/облагания:
//  Ако дестинацията е Дубай – 30% отстъпка от крайната цена
//  Ако дестинацията е София – цената се оскъпява с 25%
// Вход
// От конзолата се четат 4 реда:
// 1. Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
// 2. Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
// 3. Сезон – текст, с възможности "Summer" и "Winter"
// 4. Брой дни – цяло число в диапазона [1… 40]
// Изход
// На конзолата да се отпечата един ред:
//  Ако бюджета е достатъчен:
// "The budget for the movie is enough! We have {остатък от бюджета} leva left!"
//  Ако бюджета НЕ е достатъчен:
// "The director needs {нужна сума} leva more!"
// Резултатът да се закръгли до втората цифра след десетичния знак.