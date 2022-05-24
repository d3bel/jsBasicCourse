function grades(input){
    let index = 0;
    const presentStudents = Number(input[index++]);
    let gradeA = 0; // +5
    let aCount = 0;
    let gradeB = 0; // 4-4.99
    let bCount = 0;
    let gradeC = 0; // 3-3.99
    let cCount = 0;
    let gradeD = 0; // 2-2.99
    let dCount = 0;

        for (let i = 0; i < presentStudents; i++) {
            let grade = Number(input[index++]);
                if(grade < 3){
                    gradeD += grade;
                    dCount++
                } else if(grade < 4){
                    gradeC += grade;
                    cCount++;
                } else if(grade < 5){
                    gradeB += grade;
                    bCount++
                } else {
                    gradeA += grade;
                    aCount++
                }
        }
        let averageGrades = (gradeA + gradeB + gradeC + gradeD) / presentStudents;
        console.log(`Top students: ${(aCount / presentStudents * 100).toFixed(2)}%`);
        console.log(`Between 4.00 and 4.99: ${(bCount / presentStudents * 100).toFixed(2)}%`);
        console.log(`Between 3.00 and 3.99: ${(cCount / presentStudents * 100).toFixed(2)}%`);
        console.log(`Fail: ${(dCount / presentStudents * 100).toFixed(2)}%\nAverage: ${averageGrades.toFixed(2)}`);
}
grades(["6", "2", "3", "4", "5", "6", "2.2"])

// 6
// 2
// 3
// 4
// 5
// 6
// 2.2
