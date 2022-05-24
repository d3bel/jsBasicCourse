function fishLand(input) {
    //•	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
    let priceOfMackerel = Number(input[0]); 
    //•	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
    let priceOfSprat = Number(input[1]);
    //•	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
    let priceOfBonito = priceOfMackerel + priceOfMackerel * 0.6;
    let kilosOfBonito = Number(input[2]);
    //•	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
    let priceOfScad = priceOfSprat + priceOfSprat * 0.8;
    let kilosOfScad = Number(input[3]);
    //•	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]
    let priceOfMussels = 7.50;
    let kilosOfMussels = Number(input[4]);
    let bonitoNeeded = (priceOfBonito * kilosOfBonito);
  
    let scadNeeded = priceOfScad * kilosOfScad;
    
    let musselsNeeded = priceOfMussels * kilosOfMussels
    let totalPrice = (bonitoNeeded + scadNeeded + musselsNeeded).toFixed(2)
    console.log(totalPrice)
}
fishLand(["5.55", "3.57", "4.3", "3.6", "7"])