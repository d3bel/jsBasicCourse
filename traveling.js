function traveling(input){
    let index = 0;
    let command = input[index++];
    let currBudget = Number(input[index++]);
    let savedMoney = Number(input[index++])
    while(command !== "End"){
        while(savedMoney !== "End"){
        savedMoney += Number(input[index++]);
        if(currBudget <= savedMoney){
            savedMoney = 0;
            console.log(`Going to ${command}!`);
            command = input[index++];
            currBudget = Number(input[index++]);
            break;
        }
    } 
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

