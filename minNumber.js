function minNumber(input){
    let index = 0;
    let num = input[index++];
    let minNum = Number.MAX_SAFE_INTEGER;
    while(num !== "Stop"){
        let currnetNum = Number(num);
        if(currnetNum < minNum){
            minNum = currnetNum;
        } num = input[index++];
    } console.log(minNum)
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])

