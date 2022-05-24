function trainTheTrainers(input){
    let index = 0;
    let juryCount = Number(input[index++]);
    let presentation = input[index++];
    let totalGrade = 0;
    let averageGrade = 0;
    let finalGrade = 0;
    let loopCount = 0;
        while(presentation !== "Finish"){
            for(let i = 0; i < juryCount; i++){
            loopCount++;
            let currGrade = Number(input[index++]);
            totalGrade += currGrade;
            } averageGrade = totalGrade / juryCount;
            finalGrade += totalGrade
            console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
            presentation = input[index++];
            totalGrade = 0;
            averageGrade = 0;
        } console.log(`Student's final assessment is ${(finalGrade / loopCount).toFixed(2)}.`)

}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])




// Курсът "Train the trainers" е към края си и финалното оценяване наближава. Вашата задача е да помогнете на журито,
//   което ще оценява презентациите, като напишете функция,
//     която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях.
// От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
// След това името на презентацията - текст
// За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]
// След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
//  "{името на презентацията} - {средна оценка}."
// След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва.
// Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.
