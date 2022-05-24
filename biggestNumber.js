function biggestNum(input){
    let num = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 1; i <= num; i++) {
        let n = Number(input[i]);
        if (n > max){
            max = n;
        }
        
    } console.log(max)
}
biggestNum(["4","45","-20","7","99"])
