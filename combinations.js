function combinations(input){
    let num = Number(input[0]);
    let combiSum = 0;
    for(let i = 0; i <= num; i++){
        for(let j = 0; j <= num; j++){
            for(let k = 0; k <= num; k++){
                let total = i + j + k;
                if(total === num){
                    combiSum++
                }
            }
        }
    } console.log(combiSum)
}
combinations(["25"]);