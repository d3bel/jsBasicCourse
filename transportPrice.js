function transportPrice(input){
const kmTrip = Number(input[0]);
const dayOrNight = input[1];
const taxiEntryRate = 0.7;
const taxiDayRate = 0.79;
const taxiNightRate = 0.9;
const bussesAtleast20kmRate = 0.09;
const trainAtleast100kmRate = 0.06;
    if (kmTrip >= 20 && kmTrip < 100 && (dayOrNight == "day" || dayOrNight == "night")) {
        const bussPrice = (kmTrip * bussesAtleast20kmRate).toFixed(2);
        console.log(bussPrice);
    }
    else if (kmTrip >= 100 && (dayOrNight == "day" || dayOrNight == "night")) {
        const trainPrice = (kmTrip * trainAtleast100kmRate);
        console.log(trainPrice.toFixed(2));
    }
    else if (dayOrNight == "day") {
        const taxiDayPrice = kmTrip * taxiDayRate + taxiEntryRate;
        console.log(taxiDayPrice.toFixed(2));
    }
    else {
        const taxiNightPrice = kmTrip * taxiNightRate + taxiEntryRate;
        console.log(taxiNightPrice.toFixed(2))
    }
} 
transportPrice(["180", "night"])
// Студент трябва да пропътува n километра. Той има избор измежду три вида транспорт:
// •	Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км. Нощна тарифа: 0.90 лв. / км.
// •	Автобус. Дневна / нощна тарифа: 0.09 лв. / км. Може да се използва за разстояния минимум 20 км.
// •	Влак. Дневна / нощна тарифа: 0.06 лв. / км. Може да се използва за разстояния минимум 100 км.
// Напишете програма, която въвежда броя километри n и период от деня (ден или нощ) и изчислява цената на най-евтиния транспорт.
// Вход
// От конзолата се четат два реда:
// •	Първият ред съдържа числото n – брой километри – цяло число в интервала [1…5000]
// •	Вторият ред съдържа дума “day” или “night” – пътуване през деня или през нощта
// Изход
// Да се отпечата на конзолата най-ниската цена за посочения брой километри, форматирана до втория знак след десетичния разделител.
