function barcodeGenerator(input){
    const startNum = input[0];
    const endNum = input[1];
    let firstNum = '';
    let secondNum = '';
    let thirdNum = '';
    let fourthNum = '';
    let printLine = '';
    for(let i = startNum.charAt(0); i <= endNum.charAt(0); i++){
        if(i % 2 === 1){
            firstNum = i;
            for(let j = startNum.charAt(1); j <= endNum.charAt(1); j++){
                if(j % 2 === 1){
                    secondNum = j;
                    for(let k = startNum.charAt(2); k <= endNum.charAt(2); k++){
                        if(k % 2 === 1){
                            thirdNum = k;
                            for(let l = startNum.charAt(3); l <= endNum.charAt(3); l++){
                                if(l % 2 === 1){
                                    fourthNum = l;
                                    printLine += `${firstNum}${secondNum}${thirdNum}${fourthNum} `
                                }
                            }
                        }
                    }
                }
            }
        }
    } console.log(printLine)
}
barcodeGenerator(["2345","6789"]);



// Вход:
//  Две четирицифрени числа, които показват обхвата на баркодовете, които трябва да
// промените.
//  Първи ред – четирицифрено число – началото на обхвата. Цяло число в интервала
// [1000…9999]
//  Втори ред – четирицифрено число – края на обхвата. Цяло число в интервала [1000…9999]
// Изход:
// На конзолата трябва да се отпечатат всички &quot;баркодове&quot;, които НЕ съдържат четна цифра в себе
// си, разделени с интервал.