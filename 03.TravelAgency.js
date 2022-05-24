function travelAgency(input) {
    const locationVacation = input[0];
    const packageType = input[1];
    const vip = input[2];
    let numOfDays = Number(input[3]);
    let totalCost = 0;
    let counterLocation = 0;
    let packageCounter = 0;
    if(numOfDays > 7){
        numOfDays -= 1;
    } switch(vip){
        case "yes":
            if(locationVacation === "Bansko" || locationVacation === "Borovets"){
                counterLocation++;
                if(packageType === "noEquipment"){
                    packageCounter++
                    totalCost = 80 * 0.95;
                    totalCost *= numOfDays;
                } else if(packageType === "withEquipment"){
                    packageCounter++
                    totalCost = 100 * 0.9;
                    totalCost *= numOfDays;
                }
            } else if(locationVacation === "Varna" || locationVacation === "Burgas"){
                counterLocation++;
                if(packageType === "noBreakfast"){
                    packageCounter++
                    totalCost = 100 * 0.93;
                    totalCost *= numOfDays;
                } else if(packageType === "withBreakfast"){
                    packageCounter++;
                    totalCost = 130 * 0.88;
                    totalCost *= numOfDays;
                }
            } break;
        case "no":
            if(locationVacation === "Bansko" || locationVacation === "Borovets"){
                counterLocation++;
                if(packageType === "noEquipment"){
                    packageCounter++
                    totalCost = 80 * numOfDays;
                } else if(packageType === "withEquipment"){
                    packageCounter++
                    totalCost = 100 * numOfDays;
                }
            } else if(locationVacation === "Varna" || locationVacation === "Burgas"){
                counterLocation++;
                if(packageType === "noBreakfast"){
                    packageCounter++
                    totalCost = 100 * numOfDays;
                } else if(packageType === "withBreakfast"){
                    packageCounter++;
                    totalCost = 130 * numOfDays;
                }
            } break;
    } if(counterLocation < 1 || packageCounter < 1){
        console.log("Invalid input!");
    } else if(numOfDays < 1){
        console.log("Days must be positive number!");
    }else{
        console.log(`The price is ${totalCost.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(["Borovets","noEquipment","yes","6"]);
travelAgency(["Gabrovo","noBreakfast","no","3"]);
// travelAgency(["Varna", "withBreakfast", "no", "0"]);


// Туристическа агенция има нужда от система за изчисляване на дължимата сума при резервация. В
// зависимост от различните дестинации и различните пакети, цената е различна.
// Цените за ден са следните:
// Цена за ден
//              Банско /Боровец                  Варна/Бургас
//               с екипировка / без екипировка   със закуска / без закуска
//                   100лв.  / 80лв                           130лв./ 100лв.
// VIP отстъпка       10% /    5%                               12%  /  7%
// Ако клиентът е заявил престой повече от 7 дни, получава единия ден безплатно.
// Вход
// От конзолата се четат 4 реда:
// 1. Име на града - текст с възможности ("Bansko", "Borovets", "Varna" или "Burgas")
// 2. Вид на пакета - текст с възможности ("noEquipment", "withEquipment", "noBreakfast" или
// "withBreakfast")
// 3. Притежание на VIP отстъпка - текст с възможности "yes" или "no"
// 4. Дни за престой - цяло число в интервала [1 … 10000]
// Изход
// На конзолата се отпечатва 1 ред:
// • Когато потребителят е въвел всички данни правилно, отпечатваме:
// "The price is {цената, форматирана до втория знак}lv! Have a nice time!"
// • Ако потребителят е въвел по-малко от 1 ден за престой, отпечатваме:
// "Days must be positive number!"
// • Когато при въвеждането на града или вида на пакета се въведат невалидни данни, отпечатваме:
// "Invalid input!"