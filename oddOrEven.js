function oddOrEvenNumber(input){
    const num = Number(input[0]);
    let evenNumber = 0;
    let oddNumber = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0){
            evenNumber += Number(input[i]);
        } else {
            oddNumber += Number(input[i]);
    }
    } if (evenNumber === oddNumber) {
        console.log('Yes');
        console.log(`sum = ${evenNumber}`);
    } else {
        const difference = Math.abs(evenNumber - oddNumber);
        console.log('No');
        console.log(`Diff = ${difference}`)
    }
}
oddOrEvenNumber(["3", "5", "8", "1"])
