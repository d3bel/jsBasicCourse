function barcodeGenerator(input){
    let startNum = input[0];
    let endNum = input[1];
    let sNum1 = "";
    let sNum2 = "";
    let sNum3 = "";
    let sNum4 = "";
    let total = "";

        for(let i = startNum.charAt(0); i <= endNum.charAt(0) ; i++){
            sNum1 = i;
            if(sNum1 % 2 === 1){
                for(let j = startNum.charAt(1); j <= endNum.charAt(1); j++){
                    sNum2 = j;
                    if(sNum2 % 2 === 1){
                        for(let k = startNum.charAt(2); k <= endNum.charAt(2); k++){
                            sNum3 = k;
                            if(sNum3 % 2 === 1){
                                for(let l = startNum.charAt(3); l <= endNum.charAt(3); l++){
                                    sNum4 = l;
                                    if(sNum4 % 2 === 1){
                                        total += `${sNum1}${sNum2}${sNum3}${sNum4} `
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } console.log(total)
}
barcodeGenerator(["2345",
"6789"]);