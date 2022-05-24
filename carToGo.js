function carToGo(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let classType = "";
  let carType = "";
  let totalCost = 0;

  switch (season) {
    case "Winter":
      if (budget <= 100) {
        classType = "Economy class";
        carType = "Jeep";
        totalCost = budget * 0.65;
      } else if (budget > 100 && budget <= 500) {
        classType = "Compact class";
        carType = "Jeep";
        totalCost = budget * 0.8;
      } else if (budget > 500) {
        classType = "Luxury class";
        carType = "Jeep";
        totalCost = budget * 0.9;
      }
      break;
    case "Summer":
      if (budget <= 100) {
        classType = "Economy class";
        carType = "Cabrio";
        totalCost = budget * 0.35;
      } else if (budget > 100 && budget <= 500) {
        classType = "Compact class";
        carType = "Cabrio";
        totalCost = budget * 0.45;
      } else if (budget > 500) {
        classType = "Luxury class";
        carType = "Jeep";
        totalCost = budget * 0.9;
      }
      break;
  }
  console.log(`${classType}`);
  console.log(`${carType} - ${totalCost.toFixed(2)}`);
}
carToGo(["1010", "Summer"]);
