function coins(input){
    const coin = Number(input[0]);
    let convertCoin = parseInt(coin * 100)
    let coinsCounter = 0;
    let leftCoins = convertCoin;
    while(leftCoins !== 0){
        if(leftCoins >= 200){
            leftCoins -= 200;
        } else if(leftCoins >= 100){
            leftCoins -= 100;
        } else if(leftCoins >= 50){
            leftCoins -= 50;
        } else if(leftCoins >= 20){
            leftCoins -= 20;
        }else if(leftCoins >= 10){
            leftCoins -= 10;
        } else if(leftCoins >= 5){
            leftCoins -= 5;
        }else if(leftCoins >= 2){
            leftCoins -= 2;
        }else{
            leftCoins -= 1
        } coinsCounter++
    } console.log(coinsCounter)
}
coins(["2"])


// Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто.
// Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява
//  с колко най-малко монети може да стане това. Монетите може да са от 2 лева, 1 лев,
//   50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 