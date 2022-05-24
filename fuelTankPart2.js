function fuelTank(input) {
    const petrolPerLiter = 2.22;
    const dieselPerLiter = 2.33;
    const gasPerLiter = 0.93;

    const fuelType = input[0];
    const fuelQuantity = Number(input[1]);
    const clubCard = input[2];
    let final = 0;
        if (fuelType === "Diesel"){
            final = fuelQuantity * dieselPerLiter;
            if (clubCard === "Yes"){
                final -= fuelQuantity * 0.12;
            }
        } else if (fuelType === "Gasoline"){
            final = fuelQuantity * petrolPerLiter;
            if (clubCard === "Yes"){
                final -= fuelQuantity * 0.18
            } 
        } else if (fuelType === "Gas"){
            final = fuelQuantity * gasPerLiter;
            if (clubCard === "Yes"){
                final -= fuelQuantity * 0.08;
            }
        } if (fuelQuantity >= 20 && fuelQuantity <= 25){
            final *= 0.92;
            console.log(`${(final).toFixed(2)} lv.`);
        } else if (fuelQuantity > 25){
            final *= 0.9;
            console.log(`${(final).toFixed(2)} lv.`);
        } else {
            console.log(`${(final).toFixed(2)} lv.`)
        }
    }
            fuelTank(["Diesel", "19", "No"]);
