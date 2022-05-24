function cinemaTickets(input){
    let index = 0;
    let standardCount = 0;
    let studentCount = 0;
    let kidCount = 0;
    let totalTicketCount = 0;
        while(input[index] !== "Finish"){
            let currentMovie = input[index++];
            let saloonCapacity = Number(input[index++]);
            let currentTicket = input[index++];
            let ticketsPerMovie = 0;
                while(currentTicket !== "End"){
                    totalTicketCount++;
                    ticketsPerMovie++
                    
                    switch(currentTicket){
                        case "standard": standardCount++; break;
                        case "student": studentCount++; break;
                        case "kid": kidCount++; break;
                    }
                    if(saloonCapacity <= ticketsPerMovie){
                        break;
                    }
                    currentTicket = input[index++];
                }
                console.log(`${currentMovie} - ${(ticketsPerMovie / saloonCapacity * 100).toFixed(2)}% full.`);
        }
                console.log(`Total tickets: ${totalTicketCount}\n${(studentCount / totalTicketCount * 100).toFixed(2)}% student tickets.`)
                console.log(`${(standardCount / totalTicketCount * 100).toFixed(2)}% standard tickets.\n${(kidCount / totalTicketCount * 100).toFixed(2)}% kids tickets.`)

       
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])



        //  console.log(`${currentMovie} - ${(totalTicketCount / saloonCapacity * 100).toFixed(2)}% full.`);
        // console.log(`Total tickets: ${ticketCount}\n${(studentCount / ticketCount * 100).toFixed(2)}% student tickets.`)
        // console.log(`${(studentCount / ticketCount * 100).toFixed(2)}% standard tickets.\n${(kidCount / ticketCount * 100).toFixed(2)}% kids tickets.`)


// Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети:
//  студентски(student), стандартен(standard) и детски(kid), за всички прожекции.
//   Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
// Вход
// Входът е поредица от цели числа и текст:
// •	На първия ред до получаване на командата "Finish" - име на филма – текст
// •	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
// •	За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
// o	Типа на закупения билет - текст ("student", "standard", "kid")
// Изход
// На конзолата трябва да се печатат следните редове:
// •	След всеки филм да се отпечата, колко процента от кино залата е пълна
// "{името на филма} - {процент запълненост на залата}% full."
// •	При получаване на командата "Finish" да се отпечатат четири реда:
// o	"Total tickets: {общият брой закупени билети за всички филми}"
// o	"{процент на студентските билети}% student tickets."
// o	"{процент на стандартните билети}% standard tickets."
// o	"{процент на детските билети}% kids tickets."
