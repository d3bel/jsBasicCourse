function num100to200(input){
    if (input < 100){
        console.log("Less than 100");
    }
    else if (input >= 100 && input <= 200){
        console.log("Between 100 and 200")
    }
    else if (input > 200){
        console.log("Greater than 200")
    }
}
num100to200(["48"])
// function num100to200(input) {
//     if (input < 100){
//         console.log("Less than 100");
//     }
//     else if (input <= 200){
//         console.log("Between 100 and 200");
//     }
//     else if (input >= 201){
//         console.log("Greater than 200")
//     }
// }
num100to200(["201"])