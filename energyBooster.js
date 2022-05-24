function energyBooster(input){
    const fruit = input[0];
    const setType = input[1];
    const setOrder = Number(input[2]);
    let total = 0;
     if (setType === "small"){
         switch(fruit){
             case "Watermelon":
                 let setWatermelon = 56 * 2;
                 total = setOrder * setWatermelon;
                 break;
             case "Mango":
                 let setMango = 36.66 * 2;
                 total = setOrder * setMango;
                 break;
             case "Pineapple":
                 let setPineapple = 42.1 * 2;
                 total = setOrder * setPineapple;
                 break;
             case "Raspberry":
                 let setRaspberry = 20 * 2;
                 total = setOrder * setRaspberry;
                 break;
         } 
     } else {
         switch(fruit){
            case "Watermelon":
                let setWatermelon = 28.7 * 5;
                total = setOrder * setWatermelon;
                break;
            case "Mango":
                let setMango = 19.6 * 5;
                total = setOrder * setMango;
                break;
            case "Pineapple":
                let setPineapple = 24.8 * 5;
                total = setOrder * setPineapple;
                break;
            case "Raspberry":
                let setRaspberry = 15.2 * 5;
                total = setOrder * setRaspberry;
                break;
         }
     } if (total >= 400 && total <= 1000){
         total *= 0.85;
     } else if (total > 1000){
         total *= 0.5;
     } console.log(`${total.toFixed(2)} lv.`)
}
energyBooster(["Watermelon",
"big",
"4"])


// Сезона за изкачване на алпийски върхове започва и всички алпинисти, се запасяват с енергийни гелове за изкачването.
//  Фирма предлага малки и големи разфасовки с по 2 бр. и 5 бр. енергийни гела, като цената на един гел зависи от плодовете, от които е направен.
//   В зависимост от размера на разфасовката, цената за брой енергиен гел е различна. От конзолата се четат плодовете,
//    размерът на опаковката ((малка) 2 бр. или (голяма) 5 бр.), както и колко разфасовки са поръчани. Да се напише програма,
//     която изчислява сумата, която трябва да се плати за поръчката. 

// 	                      Диня             	Манго	          Ананас	           Малина
//  2 броя (small)       56 лв./бр.        36.66 лв./бр.      42.10 лв./бр.       20 лв./бр.
// 5 броя (big)          28.70 лв./бр.     19.60 лв./бр.      24.80 лв./бр.       15.20 лв./бр.

// При поръчки:
// •	от 400 лв. до 1000 лв. включително има 15% отстъпка
// •	над 1000 лв. има 50% отстъпка

// Вход
// От конзолата се четат 3 реда:
// 1.	Плод - текст с възможности: "Watermelon", "Mango", "Pineapple" или "Raspberry"
// 2.	Размерът на сета - текст с възможности: "small" или "big"
// 3.	Брой на поръчаните сетове - цяло число в интервала [1 … 10000]

// Изход
// На конзолата се отпечатва 1 ред:
// •	Цената, която трябва да се заплати, форматирана до втория знак след десетичната запетая, 
// в следния формат:
// "{цената} lv."
