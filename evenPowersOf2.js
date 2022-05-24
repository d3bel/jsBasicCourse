function evenPowersOf2(input){
    const num = Number(input);
    let n = 1
    for (let i = 0; i <= num; i += 2){
        console.log(n);
        n = n * 2 * 2;
    }
}
evenPowersOf2(6)