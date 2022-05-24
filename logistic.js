function logistic(input){
    index = 0;
    const totalLoads = Number(input[index++]);
    const currentLoad = Number(input[index]);
    let under3T = 0; //200
    let vanCount = 0;
    let under11T= 0; //175
    let loryCount = 0;
    let over12T = 0; //120
    let trainCount = 0;
        for (let i = 0; i < totalLoads; i++) {
            let load = Number(input[index++]);
                if(load <= 3){
                    under3T += load;
                    vanCount++
                } else if(load <= 11){
                    under11T += load;
                    loryCount++
                } else{
                    over12T += load;
                    trainCount++
                }
   }
   let totalTons = under3T + under11T + over12T;
   let total = (under3T * 200 + under11T * 175 + over12T * 120) / totalTons;
   console.log(`${total.toFixed(2)}\n${(under3T / totalTons * 100).toFixed(2)}%\n${(under11T / totalTons * 100).toFixed(2)}%\n${(over12T / totalTons * 100).toFixed(2)}%`)
}
logistic(["5", "2", "10", "20", "1", "7"])

// 5
// 2
// 10
// 20
// 1
// 7
