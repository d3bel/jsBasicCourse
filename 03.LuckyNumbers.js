function luckyNumbers(input){
    let index = 0;
    let givenNumber = Number(input[0]);
    let textLength = input[0].length
    let convNum = String(givenNumber)
    let printLine = '';
    let count = 0;
    for(let text = 0; text < textLength; text++){
        let currentNum = Number(convNum[index])

    for(let i = 1; i < 9; i++) {
        for(let j = 1; j < 9; j++){
            for(let k = 1; k < 9; k++){
                for(let l = 1; l < 9; l++){
                    if((i + j) === (k + l) && givenNumber % (i + j) === 0 && givenNumber % (k + l) === 0){
                        printLine += `${i}${j}${k}${l} `
                        count++;
                    }
                }
            }
        }
    }   currentNum = Number(convNum[index++])
    }    console.log(`${printLine} COUNTER=>${count}`);
}
luckyNumbers(["24"])



// Да се напише програма, която прочита едно цяло число N и генерира всички
//  възможни "щастливи" и различни 4-цифрени числа(всяка цифра от числото е в интервала [1...9]). 
// Числото трябва да отговаря на следните условия: 
// Щастливо число е 4-цифрено число, на което сбора от първите две цифри е равен на сбора от последните две.
//  Числото N трябва да се дели без остатък от сбора на първите две цифри на "щастливото" число.
// Вход
// Входът се чете от конзолата и се състои от едно цяло число в интервала [2...10000]
// Изход
// На конзолата трябва да се отпечатат всички "щастливи" и различни 4-цифрени числа, разделени с интервал
