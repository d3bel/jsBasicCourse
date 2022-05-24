function andProcessors(input){
    const assemblyCPUsNeeded = Number(input[0]);
    const employeesNum = Number(input[1]);
    const workingDays = Number(input[2]);
    const woringHoursPerDay = 8;
    const assemblyTimePerCPU = 3;
    const priceCPU = 110.1;
    const totalWorkingTime = employeesNum * workingDays * woringHoursPerDay;
    const totalCPUs = Math.floor(totalWorkingTime / assemblyTimePerCPU);
        if(totalCPUs >= assemblyCPUsNeeded){
            const totalProfit = Math.abs((totalCPUs * priceCPU) - (assemblyCPUsNeeded * priceCPU));
            console.log(`Profit: -> ${totalProfit.toFixed(2)} BGN`);
        } else {
            let losses = Math.abs((assemblyCPUsNeeded * priceCPU) - (totalCPUs * priceCPU));
            console.log(`Losses: -> ${losses.toFixed(2)} BGN`)
        }
}
andProcessors(["150",
"7",
"18"])




// Да се напише програма, която  пресмята каква печалба или загуба ще реализира фирма произвеждаща AND процесори.
//  Един процесор се изработва за 3 часа. Фирмата има даден брой служители, които работят определен брой дни.
//   Приема се, че един служител работи 8 часа на ден. Фирмата има за цел да изработи определен брой процесори.
//    Плануваният брой процесори, броят на служителите във фирмата и дните се прочитат от конзолата.
//     Броят на произведените процесори да бъде закръглен към по-малкото цяло число.

// Пример: за 10 часа се изработват 10/3 = 3.33 процесора   3 процесора. Един брой струва 110.10 лв.
//  Според количеството изработени процесори принтирайте на конзолата, колко повече или по-малко пари са изкарани от плануваното. 
// Вход:
// От конзолата се четат 3 реда:
// •	Първи ред – броят процесори, които трябва да се изработят – цяло число в интервала [1...500 000]
// •	Втори ред – броят служители – цяло число в интервала [1...1000]
// •	Трети ред – работните дни – цяло число в интервала [1...1000]
// Изход:
// На конзолата трябва да се отпечата текст, спрямо броя на изработените процесори:
// •	Ако са повече или колкото плануваните:
// o	"Profit: -> {печалби} BGN"
// •	Ако са по-малко от плануваните:
// o	"Losses: -> {загуби} BGN"
// Сумите трябва да са форматирани до втория знак след десетичната запетая.
