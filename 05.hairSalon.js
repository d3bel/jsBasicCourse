function hairSalon(input) {
    let index = 0;
    let dailyGoal = Number(input[index++]);
    let total = 0;
    let command = input[index++];
    while (command !== "closed") {
        let currentPosition = command;
        switch (command) {
            case "haircut":
                command = input[index++]
                switch (command) {
                    case "mens":
                        total += 15;
                        break;
                    case "ladies":
                        total += 20;
                        break;
                    case "kids":
                        total += 10;
                        break
                }break;
            case "color":
                command = input[index++]
                switch (command) {
                    case "touch up":
                        total += 20;
                        break;
                    case "full color":
                        total += 30;
                        break;
                }break;
        }
        if (total >= dailyGoal) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${total}lv.`);
            break;
        } command = input[index++];
    } if (total < dailyGoal) {
        let diff = Math.abs(total - dailyGoal);
        console.log(`Target not reached! You need ${diff}lv. more.`);
        console.log(`Earned money: ${total}lv.`);
    }
}
// hairSalon(["300",
//     "haircut",
//     "ladies",
//     "haircut",
//     "kids",
//     "color",
//     "touch up",
//     "closed"])
hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])


// Деси има фризьорски салон в София. Тя всеки ден си поставя за цел да постигне определена печалба.
//  Напишете програма, която изчислява дали е успяла да постигне целта за деня, като знаете следното:
// Деси ще приема клиенти докато не приключи работния ден. Ако постигне желания приход обаче,
//  тя ще затвори салона. Когато клиент влезе ще може да си избере една от следните услуги:
// Подстригване (haircut):
// Мъжко (mens) - 15лв.
// Дамско (ladies) – 20лв.
// Детско (kids) – 10лв.
// Боядисване (color):
// Поддръжка (touch up) – 20лв.
// Пълно боядисване (full color) – 30лв.
// Вход:
// От конзолата първоначално се чете 1 ред:
// цел за деня – цяло число в интервала [1 … 5000]
// След това се четат поредица от редове до получаване на команда "closed" или докато Деси не постигне целта за деня – услугата,
//  която иска клиентът – текст с възможности "haircut" и "color".
// При команда "haircut" ще се очаква да се въведе видът на подстригването – "mens", "ladies" или "kids".
// При команда "color" ще се очаква видът на боядисването – "touch up" или "full color".
// Изход:
// На конзолата се отпечатват 2 реда:
// На първия ред:
// Ако Деси е успяла да постигне целта за деня:
// "You have reached your target for the day!"
// Ако Деси не е успяла да постигне целта за деня:
// "Target not reached! You need {колко пари не и достигат, за да стигне целта}lv. more."
// На втория ред:
// 	"Earned money: {парите, които е спечелила за деня}lv."