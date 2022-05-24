function tradeCommissions(input) {
  const cityName = input[0];
  const salesCapacity = Number(input[1]);
  let totalCommission = 0
  switch (cityName) {
    case "Sofia" :
      if (salesCapacity >= 0 && salesCapacity <= 500){
        totalCommission = salesCapacity * 0.05;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 500 && salesCapacity <= 1000){
        totalCommission = salesCapacity * 0.07;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 1000 && salesCapacity <= 10000){
        totalCommission = salesCapacity * 0.08;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 10000){
        totalCommission = salesCapacity * 0.12;
        console.log(totalCommission.toFixed(2));
      } else {
        console.log("error");
      } break;
    case "Varna" :
      if (salesCapacity >= 0 && salesCapacity <= 500){
        totalCommission = salesCapacity * 0.045;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 500 && salesCapacity <= 1000){
        totalCommission = salesCapacity * 0.075;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 1000 && salesCapacity <= 10000){
        totalCommission = salesCapacity * 0.1;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 10000){
        totalCommission = salesCapacity * 0.13;
        console.log(totalCommission.toFixed(2));
      } else {
        console.log("error");
      } break;
    case "Plovdiv" :
      if (salesCapacity >= 0 && salesCapacity <= 500){
        totalCommission = salesCapacity * 0.055;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 500 && salesCapacity <= 1000){
        totalCommission = salesCapacity * 0.08;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 1000 && salesCapacity <= 10000){
        totalCommission = salesCapacity * 0.12;
        console.log(totalCommission.toFixed(2));
      } else if (salesCapacity > 10000){
        totalCommission = salesCapacity * 0.145;
        console.log(totalCommission.toFixed(2));
      } else {
        console.log("error");
      } break;
      default :
      console.log ("error");
  }  
}
tradeCommissions(["Plovdiv","-20"])


// Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
// Град    |0 ≤ s ≤ 500 | 500 < s ≤ 1 000 | 1 000 < s ≤ 10 000 | s > 10 000
// Sofia   | 5%	        |      7%         |           8%       |    12%
// Varna   | 4.5%       |      7.5%       |           10%      |    13%
// Plovdiv |5.5%        |       8%        |           12%      |    14.5%
// Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица.
//  Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".
