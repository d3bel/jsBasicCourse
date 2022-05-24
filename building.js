function bulding(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
        for(let i = floors; i >= 1; i--){
            let currFloor = "";
            for(let j = 0; j < rooms; j++){
                if(i === floors){
                    currFloor += `L${i}${j} `;
                } else if(i % 2 !== 0){
                    currFloor += `A${i}${j} `
                } else{
                    currFloor += `O${i}${j} `
                }
            } console.log(currFloor)
        } 

}
bulding(["9", "5"])