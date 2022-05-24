function yardGreening(input){
        let yard = Number (input[0]);
        let squaremeter = yard * 7.61;
        let discount = squaremeter * 0.18;
        let area = squaremeter - discount
        console.log (`The final price is: ${area} lv.
        The discount is: ${discount} lv.`)
}
yardGreening([550])