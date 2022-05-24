function oscarsCeremony(input){
    const hallRent = Number(input[0]);
    const statuettes = hallRent * 0.7;
    const catering = statuettes * 0.85;
    const soundEquipment = catering * 0.5;
    let totalExpenses = hallRent + statuettes + catering + soundEquipment;
    console.log(totalExpenses.toFixed(2))
}
oscarsCeremony(["3500"])