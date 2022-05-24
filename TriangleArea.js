function triangleArea(input){
    const ab = Number(input[0]);
    const h = Number(input[1]);
    const area = ab * h / 2;
    console.log(area.toFixed(2))
}
triangleArea(["15","35"])