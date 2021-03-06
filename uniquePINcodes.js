function uniquePiNcodes(input) {
    let index = 0;
    let firstNum = Number(input[index++]);
    let secondNum = Number(input[index++]);
    let thirdNum = Number(input[index++]);
    let pinCodes = "";
    for (let i = 2; i <= firstNum; i += 2) {
        for (let j = 2; j <= secondNum; j++){
            for (let k = 2; k <= thirdNum; k += 2){
                if(j === 2 || j === 3 || j === 5 || j === 7){
                    pinCodes += `${i} ${j} ${k}\n`;
                }
            }
        }
    }console.log(pinCodes);
}
uniquePiNcodes(["8","2","8"])



// Да се напише програма, която генерира трицифрени PIN кодове, като цифрите на всеки PIN код са в определен интервал.
//  За да бъде валиден един PIN код той трябва да отговаря на следните условия:
// •	Първата и третата цифра трябва да бъдат четни.
// •	Втората цифра трябва да бъде просто число в диапазона [2...7].
// Вход
// От конзолата се четат 3 реда:
// •	Горната граница на първото число - цяло число в диапазона [1...9]
// •	Горната граница на второто число - цяло число в диапазона [1...9]
// •	Горната граница на третото число - цяло число в диапазона [1...9]
// Изход
// Да се отпечатат на конзолата всички валидни трицифрени PIN кодове, чиито цифри отговарят на съответните интервали.
