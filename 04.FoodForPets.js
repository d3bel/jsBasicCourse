function foodForPets(input){
    const numOfDays = Number(input[0]);
    const totalFoodQuantity = Number(input[1]);
    let foodEatenByDog = 0;
    let foodEatenByCat = 0;
    let count = 0;
    let totalFoodEaten = 0;
    let biscuits = 0;

        for(let food = 2; food < numOfDays * 2 + 2; food++){
            let currDogFood = Number(input[food]);
            foodEatenByDog += Number(input[food++]);
            let currCatFood = Number(input[food]);
            foodEatenByCat += currCatFood;
            count++;
            if(count % 3 === 0){
                biscuits += (currDogFood + currCatFood) * 0.1;
                count = 0;
            }
        }
            totalFoodEaten += foodEatenByCat + foodEatenByDog;
            let percentTotalFood = totalFoodEaten / totalFoodQuantity * 100;
            let dogPercentFood = foodEatenByDog / totalFoodEaten * 100;
            let catPercentFood = foodEatenByCat / totalFoodEaten * 100;

console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
console.log(`${percentTotalFood.toFixed(2)}% of the food has been eaten.`);
console.log(`${dogPercentFood.toFixed(2)}% eaten from the dog.`);
console.log(`${catPercentFood.toFixed(2)}% eaten from the cat.`);
}
// foodForPets(["3","1000","300","20","100","30","110","40"]);
foodForPets(["3","500","100","30","110","25","120","35"])


// Ани има два домашни любимеца - куче и котка. Напишете програма, която изготвя статистика за
// храната на домашните любимци за определен брой дни. Всеки ден кучето и котката изяждат
// различно количество от общата им храна. На всеки трети ден получават награда - бисквитки.
// Количеството на бисквитките е 10% от общо изядената храна за деня.
// Вашата програма трябва да отпечатва статистика за количеството бисквитки, които са изяли,
// колко процента от първоначалното количество обща храна са изяли и колко процента от
// изядената храна е изяло кучето и колко е изяла котката.
// Вход
// Първоначално се чете един ред:
//  Брой дни – цяло число в диапазона [1…30]
// Общо количество храна – реално число в диапазона [0.00…10000.00]
// След това за всеки ден се чете:

// o Количество изядена храна от кучето – цяло число в диапазона [10…500]
// o Количество изядена храна от котката – цяло число в диапазона [10…500]

// Изход
// На конзолата да се отпечатват четири реда:
//  &quot;Total eaten biscuits: {количество изядени бисквитки}gr.&quot;
//  &quot;{процент изядена храна}% of the food has been eaten.&quot;
//  &quot;{процент изядена храна от кучето}% eaten from the dog.&quot;
//  &quot;{процент изядена храна от котката}% eaten from the cat.&quot;
// Количеството изядени бисквитки трябва да бъде закръглено до най – близкото цяло число, а
// процентът храна трябва да бъде форматиран до втората цифра след десетичния знак.