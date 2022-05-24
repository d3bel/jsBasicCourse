function specialNumbers(input) {
    let num = input[0];
    let specialNumbers = "";
    for(let i = 1111; i <= 9999; i++){
        let currentNum = "" + i;
        let firstNum = Number(currentNum[0]);
        let secondNum = Number(currentNum[1]);
        let thirdNum = Number(currentNum[2]);
        let fourthNum = Number(currentNum[3]);
            if(num % firstNum === 0 && num % secondNum === 0 && num % thirdNum === 0 && num % fourthNum === 0){
                specialNumbers += currentNum[0] + currentNum[1] + currentNum[2] + currentNum[3] + " ";
            }
    } console.log(specialNumbers)
}
specialNumbers(["11"]);


// Да се напише програма, която чете едно цяло число N, въведено от потребителя,
//  и генерира всички възможни "специални" числа от 1111 до 9999. За да бъде "специално" едно число, то трябва да отговаря на следното условие: 
// •	N да се дели на всяка една от неговите цифри без остатък.
// Пример: при N = 16, 2418 е специално число:
// •	16 / 2 = 8 без остатък
// •	16 / 4 = 4 без остатък
// •	16 / 1 = 16 без остатък
// •	16 / 8 = 2 без остатък
// Вход
// Входът се чете от конзолата и се състои от едно цяло число в интервала [1…600000]
// Изход
// На конзолата трябва да се отпечатат всички "специални" числа, разделени с интервал
