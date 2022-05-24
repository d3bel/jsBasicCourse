function fruitShop(input){
    const fruitType = input[0];
    const dayOfTheWeek = input[1];
    const quantity = input[2];
    let totalSum = 0
    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday"){
        switch (fruitType) {
            case "banana" :
                totalSum = 2.5 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "apple" :
                totalSum = 1.2 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "orange" :
                totalSum = 0.85 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "grapefruit" :
                totalSum = 1.45 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "kiwi" :
                totalSum = 2.7 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "pineapple" :
                totalSum = 5.5 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "grapes" :
                totalSum = 3.85 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            default:
            console.log("error");
            break;
            }
        
    } else if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
            switch (fruitType) {
                case "banana" :
                totalSum = 2.7 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "apple" :
                totalSum = 1.25 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "orange" :
                totalSum = 0.9 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "grapefruit" :
                totalSum = 1.60 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "kiwi" :
                totalSum = 3 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "pineapple" :
                totalSum = 5.6 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            case "grapes" :
                totalSum = 4.2 * quantity;
                console.log(`${totalSum.toFixed(2)}`);
                break;
            default:
                console.log("error");
            break;
                    }
                } else {
            console.log("error");
        }
    }
fruitShop(["grapes",
"Saturday",
"0.5"])




// Магазин за плодове през работните дни работи на следните цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	    2.70	  5.50  	3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.70	1.25	0.90	1.60	    3.00	   5.60	     4.20
// Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes),
//  ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) и пресмята цената според цените от таблиците по-горе.
//   Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 
