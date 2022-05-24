function pointOnRectangleBorder(input){
    const x1 = Number(input[0]);
    const y1 = Number(input[1]);
    const x2 = Number(input[2]);
    const y2 = Number(input[3]);
    const x = Number(input[4]);
    const y = Number(input[5]);

    const leftVertical = (x == x1) && (y >= y1) && (y <= y2);
    const rightVertical = (x == x2) && (y >= y1) && (y <= y2);
    const topHorizontal = (y == y1) && (x >= x1) && (x <= x2);
    const bottomHorizontal = (y == y2) && (x >= x1) && (x <= x2);

    if (leftVertical || rightVertical || topHorizontal || bottomHorizontal){
        console.log("Border");
    } else {
        console.log("Inside / Outside")
    }
}
pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"])
// 2
// -3
// 12
// 3
// 1.43
// -3

// Напишете програма, която проверява дали точка {x, y} се намира върху някоя от страните на правоъгълник {x1, y1} – {x2, y2}.
//  Входните данни се четат от конзолата и се състоят от 6 реда въведени от потребителя:
//   десетичните числа x1, y1, x2, y2, x и y (като се гарантира, че x1 < x2 и y1 < y2).
//    Да се отпечата "Border" (точката лежи на някоя от страните) или "Inside / Outside" (в противен случай). 

// Подсказка: използвайте една или няколко условни if проверки с логически операции.
//  Точка {x, y} лежи върху някоя от страните на правоъгълник {x1, y1} – {x2, y2}, ако е изпълнено едно от следните условия:
// •	x съвпада с x1 или x2 и същевременно y е между y1 и y2
// •	y съвпада с y1 или y2 и същевременно x е между x1 и x2
// Можете да проверите горните условия с една по-сложна if-else конструкция или с няколко по-прости проверки или с вложени if-else проверки
