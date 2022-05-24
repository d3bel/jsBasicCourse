function foodDelivery(input){
        const chikenMenu = 10.35;
        const fishMenu = 12.4;
        const VegMenu = 8.15;
        const chikenMenuNumber = Number (input[0]);
        const fishMenuNumver = Number (input[1]);
        const vegMenuNumber = Number (input[2]);
        const menuPrice = (chikenMenu * chikenMenuNumber) + (fishMenu * fishMenuNumver) + (VegMenu * vegMenuNumber);
        const dessertPrice = menuPrice * 0.2;
        const deliveryPrice = 2.5;
        const totalPrice = menuPrice + dessertPrice + deliveryPrice;
        console.log(totalPrice)

}
foodDelivery(["9 ",
"2 ",
"6 "]
)