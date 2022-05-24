function smallestNumber(input){
    let num = Number(input[0]);
    let minNum = Number.POSITIVE_INFINITY;
        for (let i = 1; i <= num; i++) {
            let  n = Number(input[i]);
            if (n < minNum){
                minNum = n;
            }            
        }
        console.log(minNum)
}
smallestNumber(["4", "45", "-20", "7", "99"])