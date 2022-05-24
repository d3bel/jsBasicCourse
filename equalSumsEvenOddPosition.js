function equalSumsEvenOddPosition(input){
    let startNumber = input[0];
    let endNumber = input[1];
    let printLine = "";
    for(let i = startNumber; i <= endNumber; i++){
        let currNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for(let j = 0; j <= currNum.length; j++){
            let currDigit = Number(currNum.charAt(j));
            if(j % 2 === 0){
                evenSum += currDigit
            } else{
                oddSum += currDigit
            }
            }
            if(oddSum === evenSum){
                printLine += `${i} `

        }
    } console.log(printLine)
}
equalSumsEvenOddPosition(["299900","300000"])
;
// 299900
// 300000