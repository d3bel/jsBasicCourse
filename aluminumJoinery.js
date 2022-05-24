function aluminumJoinery(input) {
  const quantityProfile = Number(input[0]);
  const profileShape = input[1];
  const deliveryOption = input[2];
  let totalCost = 0;
  let discount = 0;
  if (quantityProfile < 10) {
    console.log("Invalid order");
  } else {
    switch (profileShape) {
      case "90X130":
        if (quantityProfile > 10 && deliveryOption === "Without delivery") {
          totalCost = 110 * quantityProfile;
          if (quantityProfile > 30 && quantityProfile <= 60) {
            totalCost *= 0.95;
          } else if (quantityProfile > 60) {
            totalCost *= 0.92;
          }
        } else if (quantityProfile > 10 && deliveryOption === "With delivery") {
          totalCost = 110 * quantityProfile;
          if (quantityProfile > 30 && quantityProfile <= 60) {
            totalCost *= 0.95;
          } else if (quantityProfile > 60) {
            totalCost *= 0.92;
          }
          totalCost += 60;
        }
        break;
      case "100X150":
        if (quantityProfile > 10 && deliveryOption === "Without delivery") {
          totalCost = 140 * quantityProfile;
          if (quantityProfile > 40 && quantityProfile <= 80) {
            totalCost *= 0.94;
          } else if (quantityProfile > 80) {
            totalCost *= 0.9;
          }
        } else if (quantityProfile > 10 && deliveryOption === "With delivery") {
          totalCost = 140 * quantityProfile;
          if (quantityProfile > 40 && quantityProfile <= 80) {
            totalCost *= 0.94;
          } else if (quantityProfile > 80) {
            totalCost *= 0.9;
          }
          totalCost += 60;
        }
        break;
      case "130X180":
        if (quantityProfile > 10 && deliveryOption === "Without delivery") {
          totalCost = 190 * quantityProfile;
          if (quantityProfile > 20 && quantityProfile <= 50) {
            totalCost *= 0.93;
          } else if (quantityProfile > 50) {
            totalCost *= 0.88;
          }
        } else if (quantityProfile > 10 && deliveryOption === "With delivery") {
          totalCost = 190 * quantityProfile;
          if (quantityProfile > 20 && quantityProfile <= 50) {
            totalCost *= 0.93;
          } else if (quantityProfile > 50) {
            totalCost *= 0.88;
          }
          totalCost += 60;
        }
        break;
      case "200X300":
        if (quantityProfile > 10 && deliveryOption === "Without delivery") {
          totalCost = 250 * quantityProfile;
          if (quantityProfile > 25 && quantityProfile <= 50) {
            totalCost *= 0.91;
          } else if (quantityProfile > 50) {
            totalCost *= 0.86;
          }
        } else if (quantityProfile > 10 && deliveryOption === "With delivery") {
          totalCost = 250 * quantityProfile;
          if (quantityProfile > 25 && quantityProfile <= 50) {
            totalCost *= 0.91;
          } else if (quantityProfile > 50) {
            totalCost *= 0.86;
          }
          totalCost += 60;
        }
        break;
    }
    if (quantityProfile > 99) {
      discount += totalCost * 0.04;
    }
    const finalPrice = totalCost - discount;
    console.log(`${finalPrice.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["105", "100X150", "With delivery"]);
