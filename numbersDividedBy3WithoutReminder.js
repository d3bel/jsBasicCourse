function numbersDividedBy3WithoutReminder(input){
    for(let num = 1; num <= 100; num++){
        if(num % 3 === 0){
            console.log(num);
        }
    }
}
numbersDividedBy3WithoutReminder()