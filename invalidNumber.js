function invalidNumber(input){
    const num = Number(input[0]);
    if (num >= 100 && num <= 200 || num == 0){
        console.log("");
    } else { 
        console.log("invalid");
    }
}
invalidNumber(["0"])

// Дадено число е валидно, ако е в диапазона [100…200] или е 0.
//  Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно.