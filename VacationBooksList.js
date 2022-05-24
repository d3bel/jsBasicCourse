function vacationBookList(input){
        const pages = Number (input[0]);
        const pagePerHr = Number(input[1]);
        const days = Number(input[2]);
        const totalReadingTimePerBook = pages / pagePerHr ;
        const hrsNeeded = totalReadingTimePerBook / days;
        console.log(hrsNeeded) 
}
vacationBookList(["432 ","15 ","4 "])