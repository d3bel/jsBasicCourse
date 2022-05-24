function suitcasesLoad(input){
    let index = 0;
    const luggageCapacity = Number(input[index++]);
    let command = input[index++];
    let totalLuggage = 0;
    let spaceLeft = luggageCapacity;
    let booleanCheck = false;

        while(command !== "End"){
            let currentPosition = Number(command);
            totalLuggage++
            if(totalLuggage % 3 === 0){
                currentPosition *= 1.1; 
            } spaceLeft -= currentPosition;
                if(spaceLeft <= 0){
                    console.log(`No more space!\nStatistic: ${totalLuggage - 1} suitcases loaded.`);
                    booleanCheck = true;
                    break;
                } command = input[index++]
        } if(!booleanCheck){
             console.log(`Congratulations! All suitcases are loaded!\nStatistic: ${totalLuggage} suitcases loaded.`);
    }
}
suitcasesLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])




// Напишете програма, която ви помага при товаренето на куфари в багажника на самолет.
// Всеки самолет има определен капацитет на багажника. До получаване на команда "End" ще получавате обем на куфар.
// Обемът на всеки трети куфар трябва да се увеличава с 10%, поради загубата на пространство при начина на подреждане.
// Ако свободното пространството в даден момент е по-малко от обема на куфар товаренето трябва да прекъсне.
// Вход
// Първоначално се чете един ред:
// •	Капацитетът на багажника – реално число в диапазона [100.0…6000.0]
// След това до получаване на команда "End" или до запълване на багажника, се чете по един ред:
// o	Обем на куфар – реално число в диапазона [100.0…6000.0]
// Изход
// На конзолата да се отпечатат следните редове според случая:
// •	При получаване на командата "End" се печата:
// "Congratulations! All suitcases are loaded!"
// •	Ако обемът на куфара е по-голям от оставащото пространство в багажника:
// "No more space!"
// •	Накрая винаги се отпечатва статистика – колко багажа са натоварени:
// "Statistic: {брой натоварени багажи} suitcases loaded."
