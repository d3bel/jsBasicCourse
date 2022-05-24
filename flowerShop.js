function flowerShop(input){
    const magnoliaPrice = 3.25 * 0.95;
    const zumbulPrice = 4 * 0.95;
    const rosePrice = 3.5 * 0.95;
    const cactusPrice = 8 * 0.95;
    
    const quantityMagnolia = Number(input[0]);
    const quantityZumbul = Number(input[1]);
    const quantityRose = Number(input[2]);
    const quantityCactus = Number(input[3]);
    const giftPrice = Number(input[4]);
    const totalCost = (quantityMagnolia * magnoliaPrice) + (quantityZumbul * zumbulPrice) + (quantityRose * rosePrice) + (quantityCactus * cactusPrice);
        if (giftPrice <= totalCost) {
        const moneyLeft = Math.floor(totalCost - giftPrice);
        console.log(`She is left with ${moneyLeft} leva.`);(`She will have to borrow ${moneyLeft} leva.`);
    }
    else {
        const moneyToBorrow = Math.abs(giftPrice - totalCost);
        console.log(`She will have to borrow ${Math.ceil(moneyToBorrow)} leva.`);
    }

}
flowerShop(["15", "7", "5", "10", "100"]);

15 | 2
7 | 3
5 | 5
10 | 1
100 | 50

// Мария иска да купи подарък на сина си. Тя работи в магазин за цветя. В магазина идва поръчка за цветя. Напишете програма,
//  която пресмята сумата от поръчката и дали печалбата е достатъчна за подаръка. Цветята имат следните цени:
 
// •	Магнолии – 3.25 лева
// •	Зюмбюли – 4 лева
// •	Рози – 3.50 лева
// •	Кактуси – 8 лева
// От общата сума, Мария трябва да плати 5% данъци.
 
// Вход
// Входът се чете от конзолата и се състои от 5 реда:
// •	Брой магнолии – цяло число в интервала [0 … 50]
// •	Брой зюмбюли – цяло число в интервала [0 … 50]
// •	Брой рози – цяло число в интервала [0 … 50]
// •	Брой кактуси – цяло число в интервала [0 … 50]
// •	Цена на подаръка – реално число в интервала [0.00 … 500.00]

// Изход
// На конзолата трябва да се отпечата един ред.
// •	Ако парите СА стигнали: "She is left with {останали} leva." – сумата трябва да е закръглена към по-малко цяло число (пр. 1.90 -> 1).
// •	Ако парите НЕ достигат: "She will have to borrow {останали} leva." – сумата трябва да е закръглена към по-голямо цяло число (пр. 1.10 -> 2).

