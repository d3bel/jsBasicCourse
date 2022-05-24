function repainting(input){
    const protectionSheets = Number(input[0]);
    const paintNeeded = Number(input[1]);
    const paintthiner = Number(input[2]);
    const hrsWork = Number(input[3]);
    const protecionPrice = 1.5;
    const paintPrice = 14.5;
    const thinerPrice = 5;
    const extraPaint = 0.1;
    const extraProtection = 2;
    const bagPrice = 0.4;
    const protectionCost = (protectionSheets + extraProtection) * protecionPrice;
    const paintCost = (paintNeeded + (paintNeeded * extraPaint)) * paintPrice;
    const thinnerCost = paintthiner * thinerPrice;
    const costPrice = bagPrice + protectionCost + paintCost + thinnerCost;
    const totalLabourCost = (costPrice * 0.3) * hrsWork;
    const totalPrice = costPrice + totalLabourCost;
    console.log(totalPrice);
}
repainting(["10 ","11 ","4 ","8 "])