function truckDriver(input){
    const season = input[0];
    const kmPerMonth = Number(input[1]);
    let taxedSalary = 0;
     switch(season){
         case "Spring" :
         case "Autumn" :
             if (kmPerMonth <= 5000){
                 taxedSalary = (kmPerMonth * 0.75) * 0.9;
             } else if (kmPerMonth > 5000 && kmPerMonth <= 10000){
                 taxedSalary = (kmPerMonth * 0.95) * 0.9;
             } else if (kmPerMonth > 10000 && kmPerMonth <= 20000){
                 taxedSalary = (kmPerMonth * 1.45) * 0.9;
             } break;
         case "Summer" :
             if (kmPerMonth <= 5000){
                taxedSalary = (kmPerMonth * 0.9) * 0.9;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000){
                taxedSalary = (kmPerMonth * 1.1) * 0.9;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000){
                taxedSalary = (kmPerMonth * 1.45) * 0.9;
            } break;        
         case "Winter" :
                if (kmPerMonth <= 5000){
                   taxedSalary = (kmPerMonth * 1.05) * 0.9;
               } else if (kmPerMonth > 5000 && kmPerMonth <= 10000){
                   taxedSalary = (kmPerMonth * 1.25) * 0.9;
               } else if (kmPerMonth > 10000 && kmPerMonth <= 20000){
                   taxedSalary = (kmPerMonth * 1.45) * 0.9;
               } break;   
    } console.log(`${(4 * taxedSalary).toFixed(2)}`)
}
truckDriver(["Spring", "16942"])


// Напишете програма която пресмята колко пари ще изкара шофьор на ТИР за един сезон.
//  На входа програмата получава през кой сезон ще работи шофьора, както и колко километра на месец ще кара.
//   Един сезон е 4 месеца. Според зависи сезона и броя километри на месец ще му се заплаща различна сума на километър:
//                              |  Пролет/Есен    |   Лято       |    Зима
// км на месец <= 5000          |  0.75 лв./км    |  0.90 лв./км |   1.05 лв./км
// 5000 < км на месец <= 10000  |  0.95 лв./км    |  1.10 лв./км |   1.25 лв./км
// 10000 < км на месец <= 20000 |  1.45 лв./км – за който и да е сезон
// След като са извадени 10% за данъци се отпечатват останалите пари.

// Вход
// Входът се чете от конзолата и се състои от два реда:
// •	Първи ред – Сезон – текст "Spring", "Summer", "Autumn" или "Winter"
// •	Втори ред –  Километри на месец – реално число в интервала [10.00...20000.00]

// Изход
// На конзолата трябва да се отпечатат едно число:
// •	Заплатата на шофьора след данъците, форматирана до втория знак след десетичната запетая.

