function oddOrEvenPosition(input){
    let index = 0;
    const numbersCounter = Number(input[index++]);
    let oddSum = 0;
    let oddMin = 1000000000.0;
    let oddMax = -1000000000.0;
    let evenSum = 0;
    let evenMin = 1000000000.0;
    let evenMax = -1000000000.0;

        for (let i = 0; i < numbersCounter; i++) {
            let cunt = Number(input[index++]);
                if(i % 2 == 0){
                    oddSum += cunt;
                    if(cunt > oddMax){
                        oddMax = cunt;
                    } if (cunt < oddMin){
                        oddMin = cunt;
                    }
                } else{
                    evenSum += cunt;
                    if(cunt > evenMax){
                        evenMax = cunt;
                    } if(cunt < evenMin){
                        evenMin = cunt
                    }
                }
        }
        if(evenSum === 0 && oddSum === 0){
            console.log(`OddSum=0.00,\nOddMin=No,\nOddMax=No,\nEvenSum=0.00,\nEvenMin=No,\nEvenMax=No`);
          } else if(evenSum === 0) {
            console.log(`OddSum=${oddSum.toFixed(2)},\nOddMin=${oddMin.toFixed(2)},\nOddMax=${oddMax.toFixed(2)},\nEvenSum=0.00,\nEvenMin=No,\nEvenMax=No`);
          } else if (oddSum === 0) {
            console.log(`OddSum=0.00,\nOddMin=No,\nOddMax=No,\nEvenSum=${evenSum.toFixed(2)},\nEvenMin=${evenMin.toFixed(2)},\nEvenMax=${evenMax.toFixed(2)}`);
          } else {
            console.log(`OddSum=${oddSum.toFixed(2)},\nOddMin=${oddMin.toFixed(2)},\nOddMax=${oddMax.toFixed(2)},\nEvenSum=${evenSum.toFixed(2)},\nEvenMin=${evenMin.toFixed(2)},\nEvenMax=${evenMax.toFixed(2)}`);
          }
}
oddOrEvenPosition(["0"])
// oddOrEvenPosition(["6","2","3","5","4","2","1"])
// oddOrEvenPosition(["2","1.5","-2.5"])