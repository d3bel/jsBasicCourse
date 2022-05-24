function lettersOfCombination(input) {
    let startLetter = input[0];
    let endLetter = input[1];
    let excluded = input[2];
    let convStart = Number(startLetter.charCodeAt());
    let convEnd = Number(endLetter.charCodeAt());
    let convExcl = Number(excluded.charCodeAt());
    let printLine = ""
    let count = 0;
    for(let i = convStart; i <= convEnd; i++) {
        for( j = convStart; j <= convEnd; j++){
            for( k = convStart; k <= convEnd; k++){
                if(i === convExcl || j === convExcl || k === convExcl){
                    continue;
                }
                else{
                    count++;
                    let firstLetter = String.fromCharCode(i);
                    let secondLetter = String.fromCharCode(j);
                    let thirdLetter = String.fromCharCode(k)
                    printLine += `${firstLetter}${secondLetter}${thirdLetter} `
                }
            }
        }
    }
    console.log(`${printLine}${count}`)
}
lettersOfCombination(["f", "k", "h"])


// Напишете програма, която да принтира на конзолата всички комбинации от 3 букви в зададен интервал,
//  като се пропускат комбинациите съдържащи зададена от конзолата буква. Накрая трябва да се изпринтира броят на отпечатаните комбинации.
// Вход
// Входът се чете от конзолата и съдържа точно 3 реда:
// Ред 1.	Малка буква от английската азбука за начало на интервала – от ‘a’ до ‚z’.
// Ред 2.	Малка буква от английската азбука за край на интервала  – от първата буква до ‚z’.
// Ред 3.	Малка буква от английската азбука – от ‘a’ до ‚z’ – като комбинациите съдържащи тази буквата се пропускат.
// Изход
// Да се отпечатат на един ред всички комбинации отговарящи на условието плюс броят им разделени с интервал.
