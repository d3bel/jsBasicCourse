function trekkingMania(input){
    let index = 0;
    const groupCount = Number(input[index]);
    index++;   
    const peopleGroup = Number(input[index]);
        let firstPeak = 0;
        let secondPeak = 0;
        let thirdPeak = 0;
        let fourthPeak = 0;
        let fifthPeak = 0;
        let sumOfPeople = 0;

            for (let i = 0; i < groupCount; i++) {
                let peopleCount = Number(input[index]);
                index++;
                sumOfPeople += peopleCount;
                if (peopleCount <= 5){
                    firstPeak += peopleCount;
                } else if (peopleCount <= 12){
                    secondPeak += peopleCount;
                } else if (peopleCount <= 25){
                    thirdPeak += peopleCount;
                } else if (peopleCount <= 40){
                    fourthPeak += peopleCount;
                } else {
                    fifthPeak += peopleCount;
                }
            } 
            console.log(`${(firstPeak / sumOfPeople * 100).toFixed(2)}%`);
            console.log(`${(secondPeak / sumOfPeople * 100).toFixed(2)}%`);
            console.log(`${(thirdPeak / sumOfPeople * 100).toFixed(2)}%`);
            console.log(`${(fourthPeak / sumOfPeople * 100).toFixed(2)}%`);
            console.log(`${(fifthPeak / sumOfPeople * 100).toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

