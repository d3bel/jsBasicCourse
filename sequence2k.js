function sequence2k(input){
    let num = Number(input[0]);
    let startNum = 1;
    while(startNum <= num){
        console.log(startNum);
        startNum *= 2;
        startNum++
    }
}
sequence2k(["8"])