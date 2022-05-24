function workout(input){
    const goalDistance = 1000;
    const numsOfWorkoutDays = Number(input[0]);
    const kmRanFirstDay = Number(input[1]);
    let goalKM = kmRanFirstDay;
    let currentDistance = kmRanFirstDay;
        
    for(let i = 2; i < numsOfWorkoutDays + 2; i++){
        let currPercentAddDayRun = Number(input[i]);
        if(i < 3){
        let firstCicle = kmRanFirstDay + (kmRanFirstDay * currPercentAddDayRun / 100);
        currentDistance = firstCicle;
        goalKM += currentDistance;
        } else {
        currentDistance = currentDistance + (currentDistance * currPercentAddDayRun / 100)
        goalKM += currentDistance
        }
    } 
    let diff = Math.abs(goalKM - goalDistance)
        if(goalKM >= goalDistance){
            console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
        } else{
            console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`)
        }
}
workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"])
workout(["4",
"100",
"30",
"50",
"60",
"80"])


// Г-жа Иванова иска да отслабне след празниците. Започвайки тренировка, първия ден тя пробягва М километра.
//  Следващите N дни, тя увеличава дневната си норма с К%. За да успее да отслабне,
//   тя трябва да избяга минимум 1 000 км. Съставете програма, която при получени начални километри,
//    брой дни и проценти, с които тя ще увеличава всеки ден нормата си, ще проверява дали километрите,
//     които тя е избягала са достатъчни. Ако километрите не са достатъчни, на конзолата да се изведат недостигащите километри.
//      Ако са достатъчни да се изведе съобщение в което г-жа Иванова е поздравена за добре свършената работа.
// Вход:
// От конзолата се четат поредица от числа, всяко на отделен ред:
// На първия ред – N – брой дни, в които г-жа Иванова тренира  – цяло число в интервала [1...50]
// На втория ред – M – километрите, които е избягала първия ден – реално число в интервала [1.00…500.00]
// За всеки един ден на отделен ред :
// Процентите, с които се увеличава дневната си норма – цяло число в интервала [1…100]
// Изход:
// Да се отпечата на конзолата 1 ред, както следва:
// Ако пробяганите километри са >= 1 000 км – да се отпечатва съобщение:
// "You've done a great job running {избяганите километри повече от 1000} more   kilometers!"
//  Ако пробяганите километри са < 1 000 км – да се отпечата съобщение:
// "Sorry Mrs. Ivanova, you need to run {недостигащите километри} more kilometers"
// Резултатът да се форматира до по-голямото цяло число.
