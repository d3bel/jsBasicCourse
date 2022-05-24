function solve(){
    let primeNum = `2 3 5 7`;
    let count = 4;
    for(let i = 2; i <= 100; i++){
        if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            primeNum += ` ${i}`
            count++;
        }
    }console.log(`${primeNum} count=>${count}`)
    } 
    solve()