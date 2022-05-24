function sumOfNumbers(input){
    let sum = 0;
    for (let i = 1; i < input.length; i++) {
        sum += Number(input[i]);
    }
    console.log(sum)
}
sumOfNumbers(["3", "-10", "-20", "-30"])
