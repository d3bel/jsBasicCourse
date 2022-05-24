function easterCompetition(input) {
    let index = 0;
    let cake = Number(input[index++]);
    let chefName = '';
    let pointsSummary = 0;
    let winnerPoints = 0;
    let winnerName = '';
    let counter = 0;
    let command = input[index++];
    while (command !== "Stop") {
        counter++
        if (counter > cake) {
            console.log(`${winnerName} won competition with ${winnerPoints} points!`)
            break;
        }
        chefName = command;
        while (command !== "Stop") {
            command = input[index];
            if (command === "Stop") {
                console.log(`${chefName} has ${pointsSummary} points.`);
                if (pointsSummary > winnerPoints) {
                    console.log(`${chefName} is the new number 1`);
                    winnerName = chefName;
                    winnerPoints = pointsSummary;
                }
                continue;
            }
            pointsSummary += Number(input[index++]);
        } command = input[index++]
        if (command === "Stop") {
            command = input[index++]
            chefName = '';
            pointsSummary = 0;
            continue;
        }
    }
}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])



// С наближаването на Великден, пекарна организира конкурс за направата на най-хубав козунак. Напишете
// програма, която да намира сладкаря с най-висок резултат. В началото на конкурса се въвежда броя на
// козунаците, които ще бъдат дегустирани от посетителите на пекарната, като за всеки козунак различен
// брой посетители, ще дадат оценка от 1 до 10.
// Вход
// Първоначално от конзолата се прочита броя на козунаците – цяло число в интервала [1… 100]
// След това за всеки козунак се прочита:
// • Името на пекаря, който е направил козунака – текст
// • До получаване на командата "Stop" се прочита
// o оценка за козунак от един човек – цяло число в интервала [1... 10]
// Изход
// След получаване на командата "Stop" се печата един ред:
// • "{името на пекаря} has {общият брой получени точки} points."
// Ако след командата "Stop", пекарят е с най-много точки до момента, да се отпечата допълнителен ред:
// • "{името на пекаря} is the new number 1!"
// След дегустация на всички козунаци, да се отпечата един ред:
// • "{името на пекаря с най-много точки} won competition with {точките на пекаря} points!"