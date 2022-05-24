function fitnessCard(input) {
  const budget = Number(input[0]);
  const gender = input[1];
  const age = Number(input[2]);
  const sportType = input[3];

  let totalMoneyNeeded = 0;

  if (gender === "m") {
    switch (sportType) {
      case "Gym": totalMoneyNeeded = 42; break;
      case "Boxing": totalMoneyNeeded = 41; break;
      case "Yoga": totalMoneyNeeded = 45; break;
      case "Zumba": totalMoneyNeeded = 34; break;
      case "Dances": totalMoneyNeeded = 51; break;
      case "Pilates": totalMoneyNeeded = 39; break;
    }
    if (age <= 19) {
      totalMoneyNeeded *= 0.8;
    }
  } else if (gender === "f") {
    switch (sportType) {
      case "Gym": totalMoneyNeeded = 35; break;
      case "Boxing": totalMoneyNeeded = 37; break;
      case "Yoga": totalMoneyNeeded = 42; break;
      case "Zumba": totalMoneyNeeded = 31; break;
      case "Dances": totalMoneyNeeded = 53; break;
      case "Pilates": totalMoneyNeeded = 37; break;
    }
    if (age <= 19) {
      totalMoneyNeeded *= 0.8;
    }
  }
  const difference = Math.abs(budget - totalMoneyNeeded);
  if (totalMoneyNeeded <= budget) {
    console.log(`You purchased a 1 month pass for ${sportType}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${difference.toFixed(2)} more.`
    );
  }
}

fitnessCard(["50",
"m",
"13",
"Dances"])
;

// Да се напише програма, която проверява дали първоначално налична сума е достатъчна, за да се заплати карта за месечен достъп във фитнес.
// Цената на картата зависи от пола на клиента и спорта, който практикува:
//                 Пол  	Gym	  Boxing	 Yoga   	Zumba   	Dances  	Pilates
//                 мъж  	$42 	$41 	 $45	     $34	      $51	     $39
//                 жена 	$35	    $37 	 $42	     $31	      $53	     $37

// Всички цени на карти за ученици (възраст под 19 години вкл.) са с 20% намаление.

// Вход
// От конзолата се прочитат 4 реда:
// •	Сумата, с която разполагаме - реално число в интервала [10.00…1000.00]
// •	Пол - символ ('m' за мъж и 'f' за жена)
// •	Възраст - цяло число в интервала [5…105]
// •	Спорт - текст (една от възможностите в таблицата)

// Изход
// На конзолата се отпечатва 1 ред:
// •	Ако сумата е достатъчна:
// "You purchased a 1 month pass for {sport}."
// където {sport} е въведения тип спорт
// •	Ако сумата не е достатъчна трябва да се пресметне колко още пари са необходими, за да се закупи карта:
// "You don't have enough money! You need ${money} more."
// където {money} e оставащата сума нужна, за да се закупи картата, форматирана до втория знак след десетичната запетая.
