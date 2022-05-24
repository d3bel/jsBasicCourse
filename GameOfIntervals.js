function gameOfIntervals(input){
    index = 0;
    const movesPerTurn = Number(input[index++]);
    let totalPoints = 0;
    let pointsUnder10 = 0;
    let pointsUnder20 = 0;
    let pointsUnder30 = 0;
    let pointsUnder40 = 0;
    let pointsUnder50 = 0;
    let invalidNum = 0;

        for (let i = 0; i < movesPerTurn; i++) {
            let currentPoints = Number(input[index++]);
            if(currentPoints >= 0 && currentPoints <= 50){
                if(currentPoints < 10){
                    totalPoints += currentPoints * 0.2
                    pointsUnder10++;
                } else if(currentPoints <20){
                    totalPoints += currentPoints * 0.3
                    pointsUnder20++;
                } else if(currentPoints < 30){
                    totalPoints += currentPoints * 0.4
                    pointsUnder30++
                } else if(currentPoints < 40){
                    totalPoints += 50
                    pointsUnder40++
                } else{
                    totalPoints += 100
                    pointsUnder50++
                }
            }  else{
                totalPoints -= totalPoints / 2;
                invalidNum++;
        } 
    }
    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${(pointsUnder10 / movesPerTurn * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(pointsUnder20 / movesPerTurn * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(pointsUnder30 / movesPerTurn * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(pointsUnder40 / movesPerTurn * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(pointsUnder50 / movesPerTurn * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNum / movesPerTurn * 100).toFixed(2)}%`);
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])