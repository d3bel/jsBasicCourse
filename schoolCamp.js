function schoolCamp(input){
    const season = input[0];
    const groupType = input[1];
    const quantityStudents = Number(input[2]);
    const quantitySleepover = Number(input[3]);

    let price = 0;
    let sportType = "";

    switch (season){
        case "Winter" :
            if (groupType === "boys" || groupType === "girls"){
                price = quantityStudents * 9.6 * quantitySleepover;
                if (groupType === "boys"){
                    sportType = "Judo";
                } else {
                    sportType = "Gymnastics";
                }
            } else {
                price = quantityStudents * 10 * quantitySleepover;
                sportType = "Ski"
            } break;
        case "Spring" :
            if (groupType === "boys" || groupType === "girls"){
                price = quantityStudents * 7.2 * quantitySleepover;
                if (groupType === "boys"){
                    sportType = "Tennis";
                } else {
                    sportType = "Athletics";
                }
            } else {
                price = quantityStudents * 9.5 * quantitySleepover;
                sportType = "Cycling"
            } break;
        case "Summer" :
            if (groupType === "boys" || groupType === "girls"){
                price = quantityStudents * 15 * quantitySleepover;
                if (groupType === "boys"){
                    sportType = "Football";
                } else {
                    sportType = "Volleyball";
                }
            } else {
                price = quantityStudents * 20 * quantitySleepover;
                sportType = "Swimming"
            } break; 
    } if (quantityStudents >= 10 && quantityStudents < 20){
        price *= 0.95;
    } else if (quantityStudents >= 20 && quantityStudents < 50){
        price *= 0.85;
    } else if (quantityStudents >= 50) {
        price *= 0.5;
    }
    console.log(`${sportType} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"]);

// Частно училище организира лагери за учениците по време на ваканциите.
//  В зависимост от вида на ваканцията (пролетна, лятна или зимна)
//   и вида на групата (момчета/момичета или смесена) цената на нощувката в хотела е различна,
//   както и спортът, който ще практикуват учениците.
//                   Зимна ваканция     |    Пролетна ваканция     |      Лятна ваканция
// момчета/момичета	 ->        9.60     |          7.20            |         15
// смесена група	 ->        10       |          9.50            |         20

// Училището получава отстъпка от крайната цена, в зависимост от броя на настанените в хотела ученици:
// •	Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
// •	Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
// •	Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка

// В таблицата по-долу са дадени спортовете, които ще се практикуват в зависимост от вида на ваканцията и групата:
//                    Зимна ваканция    |    Пролетна ваканция     |     Лятна ваканция
// момичета   ->          Gymnastics    |            Athletics     |       Volleyball
// момчета    ->              	Judo    |              Tennis	   |       Football
// смесена група  ->        	Ski     |              Cycling     |      Swimming
// Да се напише програма, която пресмята цената, която ще заплати училището за нощувките и принтира спорта, който ще се практикува от учениците.

// Вход
// От конзолата се четат 4 реда:
// 1.	Сезонът – текст - “Winter”, “Spring” или “Summer”;
// 2.	Видът на групата – текст - “boys”, “girls” или “mixed”;
// 3.	Брой на учениците – цяло число в интервала [1 … 10000];
// 4.	Брой на нощувките – цяло число в интервала [1 … 100].

// Изход
// На конзолата се отпечатва 1 ред:
// •	Спортът, който са практикували учениците и цената за нощувките,
//  която е заплатило училището, форматирана до втория знак след десетичната запетая, в следния формат:
// "{спортът} {цената} lv.“
