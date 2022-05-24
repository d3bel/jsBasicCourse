function hospital(input){
    index = 0;
    const schedule = Number(input[index]);
    index++
    const patientsNum = Number(input[index]);
        let currentDoctors = 7;
        let patientsChecked = 0;
        let patientsLeft = 0;

        for (let i = 1; i <= schedule; i++) {
            let dayPatients = Number(input[index]);
            index++
            if(i % 3 ===0){
                if (patientsLeft > patientsChecked){
                    currentDoctors++
                }
            }
            if (currentDoctors < dayPatients){
                patientsLeft += dayPatients - currentDoctors;
                patientsChecked += currentDoctors
            } else {
                patientsChecked += dayPatients
            }
        } console.log(`Treated patients: ${patientsChecked}.\nUntreated patients: ${patientsLeft}.`);
}
hospital(["6", "25", "25", "25", "25", "25", "2"])