function petShop(input){
        let dogFood = Number (input[0]);
        let dogPackage = dogFood * 2.50;
        let catFood = Number (input[1]);
        let catPackage = catFood * 4;
        let area = dogPackage + catPackage
        console.log(`${area} lv`)

}
petShop(["5", "4"]);