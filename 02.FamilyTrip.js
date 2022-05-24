function familyTrip(input) {
    const budget = Number(input[0]);
    const numOfNights = Number(input[1]);
    const pricePerNight = Number(input[2]);
    const percentExtraExpenses = Number(input[3]);
    let total = 0;
    let discount = 0;
    if (numOfNights > 7) {
        discount = pricePerNight * 0.95;
        total += numOfNights * discount;
        total += budget * (percentExtraExpenses / 100);
    } else {
        total += numOfNights * pricePerNight;
        total += budget * (percentExtraExpenses / 100);
    }
    let diff = Math.abs(budget - total)
    if (total <= budget) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
familyTrip(["500", "7", "66", "15"])


// Семейство Иванови планират семейната си почивка. Вашата задача е да напишете програма,
// която да изчислява дали предвидения от тях бюджет ще им стигне, като знаете колко нощувки са
// планирали, каква е цената за нощувка и колко процента от бюджета са предвидили за
// допълнителни разходи. Трябва да се има предвид, че ако броят на нощувките е по-голям от 7,
// цената за нощувка се намаля с 5%.
// Вход
// От конзолата се четат 4 реда:
//  Бюджетът, с който разполагат – реално число в интервала [1.00 … 10000.00]
//  Брой нощувки – цяло число в интервала [0 … 1000]
//  Цена за нощувка – реално число в интервала [1.00 … 500.00]
//  Процент за допълнителни разходи – цяло число в интервала [0 … 100]
// Изход
// Отпечатването на конзолата зависи от резултата:
//  Ако сумата е достатъчна:
// o "Ivanovi will be left with {останали пари след почивката} leva after
// vacation."
//  Ако НЕ е достигната сумата:
// o "{парите нужни до достигане на целта} leva needed."
// Сума трябва да се форматира до втората цифра след десетичния знак.