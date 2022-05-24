function leftOrRight(input){
    const num = Number(input[0]);
    let leftSide = 0;
    let rightSide = 0;
    for (let i = 1; i <= num; i++) {
        leftSide += Number(input[i]);
    } for (let j = num + 1; j <= num * 2; j++) {
            rightSide += Number(input[j]);
        }
 if (leftSide === rightSide){
        console.log(`Yes, sum ="${rightSide}`);
    } else{
        let sum = Math.abs(leftSide - rightSide);
        console.log(`No, diff=${sum}`);
    }
}
leftOrRight(["2", "10", "90", "60", "40"])