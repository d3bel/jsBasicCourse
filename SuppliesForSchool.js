function suppliesForSchool(input){
    const penPack = Number(input[0]);
    const markPack = Number(input[1]);
    const cleaningDetergent = Number(input[2]);
    const discount = Number(input[3]);
    const penPackPrice = penPack * 5.8;
    const markPackPrice = markPack * 7.2;
    const cleaningDetergentPrice = cleaningDetergent * 1.2;
    const totalPrice = penPackPrice + markPackPrice + cleaningDetergentPrice
    const totalAfterDiscount = totalPrice - (discount / 100) * totalPrice
    console.log(totalAfterDiscount)

}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)