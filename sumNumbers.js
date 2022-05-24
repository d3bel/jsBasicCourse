function sumNumbers(input){
    let index = 0;
    let maxNum = Number(input[index++]);
    let currentNum = Number(input[index++]);

    while(maxNum > currentNum){
        currentNum += Number(input[index++])
    } console.log(currentNum)
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
