function finalCompetition(input) {
    const dancerQuantity = Number(input[0]);
    const pointsGiven = Number(input[1]);
    const season = input[2];
    const location = input[3];

    let expenses = 0;
    let moneyPrize = 0;
    let charity = 0;

        switch(season){
            case "summer":
                if(location === "Bulgaria"){
                    moneyPrize = dancerQuantity * pointsGiven;
                    expenses = moneyPrize * 0.05
                    charity = (moneyPrize - expenses) * 0.75;
                } else if(location === "Abroad"){
                    moneyPrize = dancerQuantity * pointsGiven;
                    moneyPrize += moneyPrize * 0.5;
                    expenses = moneyPrize * 0.1;
                    charity = (moneyPrize - expenses) * 0.75;
                } break;
            case "winter":
                if(location === "Bulgaria"){
                    moneyPrize = dancerQuantity * pointsGiven;
                    expenses = moneyPrize * 0.08
                    charity = (moneyPrize - expenses) * 0.75;
                } else if(location === "Abroad"){
                    moneyPrize = dancerQuantity * pointsGiven;
                    moneyPrize += moneyPrize * 0.5;
                    expenses = moneyPrize * 0.15;
                    charity = (moneyPrize - expenses) * 0.75;
                } break;                
        }
        let moneyPerDancer = (moneyPrize - expenses - charity) / dancerQuantity;
        
        console.log(`Charity - ${charity.toFixed(2)}`);
        console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
finalCompetition(["1",
    "89.5",
    "summer",
    "Abroad"])
finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"])


// След успешно класиране, група заминава за  финалното състезание. След представянето си всяка група получава парична награда.
//  Тя зависи от: държавата, в която се е провело състезанието; броя точки, които журито е дало и сезонът,
//   през който се е провело състезанието.
// Ако състезанието се е провело в България паричната награда се изчислява като се умножат точките по броя участниците.
// Ако се е провело в чужбина – се умножават броя участници по броя точки и към тях се добавя 50% от получената сума.
// От получената сума се изваждат разходите посочени в проценти спрямо сезона, през който се е провел:
//           	Лято	Зима
// България	      5%	8%
// Чужбина	     10%	15%

// След завръщането си групата дарява 75% от сумата, след приспаднатите разходи, за благотворителност.
//  Останалата сума се разпределя между членовете на групата.
// Да се  напише програма, която изчислява колко пари са дадени за благотворителност и колко е получил всеки един член на групата.
// Вход:
// От конзолата се четат 4 реда:
// Брой танцьори – цяло число в интервала [1 … 10]
// Брой точки – реално число в интервала [1.00 … 10000.00]
// Сезон –  текст със следните възможности - "summer" или "winter"
// Място – текст със следните възможности - "Bulgaria" или "Abroad"
// Изход:
// На конзолата се отпечатват 2 реда:
// Сумата, която са дали за благотворителност
// "Charity - {сума за благотворителност}"
// Сумата, която е получил всеки танцьор
// "Money per dancer - {сума за танцьор}"
// Сумите да бъдат форматирани до втория знак след десетичната запетая.
