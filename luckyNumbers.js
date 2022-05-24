function luckyNumbers(input) {
    let givenNumber = Number(input[0]);
    let printLine = '';
    for (let i = 1; i <= givenNumber; i++) {
        if (i > 9) {
            continue;
        }
        for (let j = 1; j <= givenNumber; j++) {
            if (j > 9) {
                continue;
            }
            for (let k = 1; k <= givenNumber; k++) {
                if (k > 9) {
                    continue;
                }
                for (let l = 1; l <= givenNumber; l++) {
                    if (l > 9) {
                        continue;
                    }
                    let firstSum = i + j;
                    let secondSum = k + l;
                    if (firstSum === secondSum && givenNumber % firstSum === 0 && givenNumber % secondSum === 0) {
                        printLine += `${i}${j}${k}${l} `
                        firstSum = 0;
                        secondSum = 0;
                    }
                }
            }
        }
    }
    console.log(printLine);
}
luckyNumbers(["24"])