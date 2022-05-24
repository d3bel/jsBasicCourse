function vacation(input) {
  let index = 0;
  const moneyNeededForVacation = Number(input[index++]); // •	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
  let presentMoney = Number(input[index++]); // •	Налични пари - реално число в интервала [0.00... 25000.00]
  let daysCount = 0;
  let spendCount = 0;
  let currentAction = "";
  let currentMoney = presentMoney

    while(moneyNeededForVacation > currentMoney){
      let actionType = input[index++];
      currentAction = actionType;
      currentValue = Number(input[index++]);
      daysCount++
        if(currentAction === "spend"){
          currentMoney -= currentValue;
          spendCount++;
          if(currentMoney <= 0){
            currentMoney = 0;
          }
          if(spendCount >= 5){
            console.log("You can't save the money.");
            console.log(`${daysCount}`);
            break;
          }
        } else{
          currentMoney += currentValue;
          spendCount = 0;
        }          
    } if(currentMoney >= moneyNeededForVacation){
      console.log(`You saved the money for ${daysCount} days.`)
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])



// Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере
//  дали ще успее да събере необходимата сума. Тя спестява или харчи част от парите си всеки ден.
// Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
// Вход
// След това многократно се четат по два реда:
// •	Вид действие – текст с възможности "spend" и "save".
// •	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
// Изход
// Функцията трябва да приключи при следните случаи:
// •	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
// o	"You can't save the money."
// o	"{Общ брой изминали дни}"
// •	Ако Джеси събере парите за почивката на конзолата се изписва:
// o	"You saved the money for {общ брой изминали дни} days."
