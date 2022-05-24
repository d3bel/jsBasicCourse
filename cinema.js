function cinema(input){
 const typeOfProjection = input[0];
 const rowSeats = Number(input[1]);
 const columns = Number(input[2]);
 let income = 0;
 if (typeOfProjection === "Premiere") {
     income = rowSeats * columns * 12;
 } else if (typeOfProjection === "Normal"){
     income = rowSeats * columns * 7.5;
 } else if (typeOfProjection === "Discount"){
     income = rowSeats * columns * 5;
 } console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])



// В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
// •	Premiere – премиерна прожекция, на цена 12.00 лева.
// •	Normal – стандартна прожекция, на цена 7.50 лева.
// •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
// Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала.
//  Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.  
