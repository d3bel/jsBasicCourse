function circelAreaAndPerimeter(input){
    let radius = Number(input[0]);
        let area = radius * Math.PI * radius;
        console.log(area.toFixed(2));
        let perimeter = 2 * Math.PI * radius;
        console.log(perimeter.toFixed(2));
}
circelAreaAndPerimeter(["4.5"])