function mountainRun(input){
    const recordInSeconds = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const secondsPerMeterClimbing = Number(input[2]);
    const slopeDelayEvery50meters = 30;
    
    const totalTime = distanceInMeters * secondsPerMeterClimbing;
    const delayTime = Math.floor(distanceInMeters / 50) * slopeDelayEvery50meters;
    const GeorgeTotalTime = totalTime + delayTime;
    const recordToGeorgeTimeDifference = Math.abs(recordInSeconds - GeorgeTotalTime);

    if (GeorgeTotalTime >= recordInSeconds){
        console.log(`No! He was ${recordToGeorgeTimeDifference.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${GeorgeTotalTime.toFixed(2)} seconds.`);
    }
}
mountainRun(["10164",
"1400",
"25"])






// Георги решава да подобри рекорда за най-бързо изкачване на връх Монблан. На конзолата се въвежда рекордът в секунди,
//  който Георги трябва да подобри, разстоянието в метри, което трябва да изкачи и времето в секунди, за което той изкачва 1 метър.
//   Да се напише програма, която изчислява дали се е справил със задачата,
//    като се има предвид, че: наклона на терена го забавя на всеки 50 м. с 30 секунди.
//     Да се изчисли времето в секунди, за което Георги ще изкачи разстоянието до върха и разликата спрямо рекорда. 
// Когато се изчислява колко пъти Георги ще се забави в резултат на наклона на терена, резултатът трябва да се закръгли надолу до най-близкото цяло число.

// Вход
// От конзолата се четат 3 реда:
// 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3.	Времето в секунди, за което изкачва 1 м. – реално число в интервала [0.00 … 1000.00]

// Изход
// Отпечатването на конзолата зависи от резултата:
// •	Ако Георги е подобрил рекорда отпечатваме:
// o	" Yes! The new record is {времето на Георги} seconds."
// •	Ако НЕ е подобрил рекорда отпечатваме:
// o	"No! He was {недостигащите секунди} seconds slower."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.
