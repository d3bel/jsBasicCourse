function maxNum(input){
    let index = 0;
    let num = input[index++];
    let maxNum = Number.MIN_SAFE_INTEGER;
    while(num !== "Stop"){
        let currnetNum = Number(num);
        if(currnetNum > maxNum){
            maxNum = currnetNum;
        } num = input[index++]
    } console.log(maxNum)
}
maxNum(["-1",
"-2",
"Stop"])

