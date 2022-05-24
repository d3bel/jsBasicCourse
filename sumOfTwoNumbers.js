function sumOfTwoNumbers(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let currFirstNum = 0;
    let currSecondNum = 0;
    let combination = 0;
    let booleanCheck = false;
    for(let i = firstNum; i <= secondNum; i++){
        for(let j = firstNum; j <= secondNum; j++){
            combination++
            if(i + j === magicNum){
                currFirstNum = i;
                currSecondNum = j;
                console.log(`Combination N:${combination} (${currFirstNum} + ${currSecondNum} = ${magicNum})`);
                booleanCheck = true;
                break;
            }
        } if(booleanCheck){
            break;
        }
    }
    if(!booleanCheck){
        console.log(`${combination} combinations - neither equals ${magicNum}`)

    }
}
sumOfTwoNumbers(["23",
"24",
"20"])




