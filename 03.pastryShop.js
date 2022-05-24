function pastryShop(input) {
  const cakeType = input[0];
  const numberOfOrders = Number(input[1]);
  const dateBeforeChristmas = Number(input[2]);
  let cakePrice = 0;
  let soufflePrice = 0;
  let baklavaPrice = 0;
  let totalPrice = 0;
  switch (cakeType) {
    case "Cake":
      if (dateBeforeChristmas <= 15) {
        cakePrice = 24;
        totalPrice = cakePrice * numberOfOrders;
        if (totalPrice > 100 && totalPrice < 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.15;
        } else if (totalPrice > 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.25;
        }
      } else {
        cakePrice = 28.7;
        totalPrice = cakePrice * numberOfOrders;
        if (totalPrice > 100 && totalPrice < 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.15;
        } else if (totalPrice > 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.25;
        }
      }
      if (dateBeforeChristmas <= 15) {
        totalPrice -= totalPrice * 0.1;
      }
      break;
    case "Souffle":
      if (dateBeforeChristmas <= 15) {
        soufflePrice = 6.66;
        totalPrice = soufflePrice * numberOfOrders;
        if (totalPrice > 100 && totalPrice < 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.15;
        } else if (totalPrice > 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.25;
        }
      } else {
        soufflePrice = 9.8;
        totalPrice = soufflePrice * numberOfOrders;
        if (totalPrice > 100 && totalPrice < 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.15;
        } else if (totalPrice > 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.25;
        }
      }
      if (dateBeforeChristmas <= 15) {
        totalPrice -= totalPrice * 0.1;
      }
      break;
    case "Baklava":
      if (dateBeforeChristmas <= 15) {
        baklavaPrice = 12.6;
        totalPrice = baklavaPrice * numberOfOrders;
        if (totalPrice > 100 && totalPrice < 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.15;
        } else if (totalPrice > 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.25;
        }
      } else {
        baklavaPrice = 16.98;
        totalPrice = baklavaPrice * numberOfOrders;
        if (totalPrice > 100 && totalPrice < 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.15;
        } else if (totalPrice > 200 && dateBeforeChristmas <= 22) {
          totalPrice -= totalPrice * 0.25;
        }
      }
      if (dateBeforeChristmas <= 15) {
        totalPrice -= totalPrice * 0.1;
      }
      break;
  }
  console.log(totalPrice.toFixed(2));
}
pastryShop(["Baklava", "50", "1"]);

// С наближаването на коледните и новогодишни празници сладкарница започва записване на поръчки за изработка на сладкиши,
//  като предлага следния ценоразпис и отстъпки според датата на която е направена поръчката.

//                                      	Торта       	Суфле	          Баклава
// До 15 декември	                    24 лв./бр.      	6.66 лв./бр.	   12.60 лв./бр.
// След 15 декември	                    28.70 лв./бр.	    9.80 лв./бр.	   16.98 лв./бр.

// До 22 декември включително съществуват следните отстъпки, които се прилагат в следния ред:
// •	При поръчка от 100 лв. до 200 лв. -> 15% отстъпка
// •	При поръчка над 200 лв. -> 25% отстъпка
// •	До 15 декември включително -> 10% допълнителна отстъпка от крайната цена
// Вход
// От конзолата се четат 3 реда:
// 1.	Сладкиш - текст - "Cake", "Souffle" или "Baklava"
// 2.	Брой на поръчаните сладкиши - цяло число в интервала [1 … 10000]
// 3.	Ден от месец декември преди Коледа - цяло число в интервала [1 … 24]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Цената, която трябва да се заплати, форматирана до втория знак след десетичната запетая
