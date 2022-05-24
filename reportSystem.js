function reportSystem(input) {
  let index = 0;
  const goalSummary = Number(input[index++]);
  let command = input[index++];
  let totalCashPayments = 0;
  let cashCounter = 0;
  let totalCreditCardPayments = 0;
  let cCardCounter = 0;
  let transactionCount = 0;
  while (command !== "End") {
    let currentPosition = Number(command);
    transactionCount++;
    if (transactionCount % 2 === 0 && currentPosition >= 10) {
      cCardCounter++;
      totalCreditCardPayments += currentPosition;
      console.log("Product sold!");
    } else if (transactionCount % 2 === 1 && currentPosition <= 100) {
      cashCounter++;
      totalCashPayments += currentPosition;
      console.log("Product sold!");
    } else {
      console.log("Error in transaction!");
    }
    command = input[index++];
    if (totalCashPayments + totalCreditCardPayments >= goalSummary) {
      let averageCashPayment = totalCashPayments / cashCounter;
      let averageCreditCardPayment = totalCreditCardPayments / cCardCounter;
      console.log(`Average CS: ${averageCashPayment.toFixed(2)}\nAverage CC: ${averageCreditCardPayment.toFixed(2)}`);
      break;
    } else if (
      command === "End" &&
      totalCashPayments + totalCreditCardPayments < goalSummary
    ) {
      console.log("Failed to collect required money for charity.");
      break;
    }
  }
}
// reportSystem(["500","120","8","63","256","78","317"]);
// reportSystem(["600", "86", "150", "98", "227", "End"]);
reportSystem(["500",100,10,10,100,"10","10","100","100","End"])

// На благотворително събитие плащанията за закупените продукти
//  винаги се редуват: плащане в брой и плащане с карта. Установени са следните правила за заплащане:
// •	Ако продуктът надвишава 100лв., за него не може да се плати в брой
// •	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
// Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
// Вход
// От конзолата се четат:
// •	Сумата, която се очаква да бъде събрана от продажбите - цяло число в интервала [1 ... 10000]
// На всеки следващ ред, до получаване на командата "End" или докато не се
//  съберат нужните средства: цените на предметите, които ще бъдат закупени - цяло число в интервала [1 ... 500]
// Изход
// На конзолата да се отпечата:
// •	При успешна транзакция: "Product sold!"
// •	При неуспешна транзакция: "Error in transaction!"
// •	Ако сумата на всички закупени продукти надвиши или достигне очакваната сума, програмата трябва да приключи и на конзолата да се изпишат два реда:
// o	"Average CS: {средно плащане в кеш на човек}"
// o	"Average CC: {средно плащане с карта на човек}"
//               Плащанията трябва да бъдат форматирани до втората цифра след десетичния знак.
// •	При получаване на команда "End", да се изпише един ред:
// o	"Failed to collect required money for charity."
