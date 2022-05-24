function fishTank(input) {
    const lenght = Number(input[0]);
    const width = Number(input[1]);
    const hight = Number(input[2]);
    const percentige = Number(input[3]) / 100;
    const tankCapacity = lenght * width * hight;
    const tankInLiters = tankCapacity / 1000;
    const litersNeeded = tankInLiters * (1 - percentige);
    console.log(litersNeeded);
}
fishTank(["85", "75", "47", "17"])