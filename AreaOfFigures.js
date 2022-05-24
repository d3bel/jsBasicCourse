function areaOfFigures(input){
    const type = input[0];
        if (type === "square"){
            const area = Number(input[1]);
            const result = area * area;
            console.log(result.toFixed(3));
        }
        else if (type === "rectangle"){
            const a = Number(input[1]);
            const b = Number(input[2]);
            const result = a * b;
            console.log(result.toFixed(3));
        }
        else if (type === "circle"){
            const a = Number(input[1]);
            const result = Math.PI * Math.pow(a, 2);
            console.log(result.toFixed(3));
        }
        else if (type === "triangle"){
            const a = Number(input[1]);
            const c = Number(input[2]);
            const result = a * c / 2;
            console.log(result.toFixed(3));
        }
}
areaOfFigures(["triangle","4.5","20"])