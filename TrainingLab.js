function trainingLab(input){
    const widt = Number(input[0]);
    const hight = Number (input[1]);
    const workBenchH = 0.7;
    const workBenchW = 1.2;
    const pathwayH = 1;
    const upperSideLab = hight - pathwayH;
    const wholeNumberW = Math.floor(upperSideLab / workBenchH) ;
    const wholeNumberH = Math.floor(widt  / workBenchW) ;
    const totalSeats = wholeNumberH * wholeNumberW - 3;
    console.log(totalSeats)
}
trainingLab(["8.4" , "5.2"])