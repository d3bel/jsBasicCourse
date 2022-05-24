function numbersDivisibleBy9(input){
    const minnum = Number(input[0]);
    const maxnum = Number(input[1]);
    let sum = 0;
    let outputNum = "";
    for (let i = minnum; i < maxnum; i++){
        if (i % 9 === 0){
            sum += Number([i]);
            outputNum +=  `${i}
`;
        }
    } console.log(`The sum is: ${sum}`);
    console.log(outputNum);
}
numbersDivisibleBy9(["100", "200"])