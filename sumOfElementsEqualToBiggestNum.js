function elementsEquality(input){
    const number = Number(input[0]);
    let maxNum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        let n = Number(input[i]);
        if (n > maxNum){
            maxNum = n;
        } 
    } for (let j = 1; j <= number; j++) {
        sum += Number(input[j]);            
    }   sum -= maxNum
    if (sum === maxNum){
        console.log("Yes");
        console.log(`Sum = ${maxNum}`)
    } else {
        const diff = Math.abs(maxNum - sum);
        console.log("No");
        console.log(`Diff = ${diff}`);
    }
}
elementsEquality(["7", "3", "4", "1", "1", "2", "12", "1"])
