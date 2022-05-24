function newHouse(input) {
  const flowerType = input[0];
  const flowerQuantity = Number(input[1]);
  const budget = Number(input[2]);
  const rosesPrice = 5;
  const dahliasPrice = 3.8;
  const tulipsPrice = 2.8;
  const narcissusPrice = 3;
  const gladiolusPrice = 2.5;
  let price = 0;
  switch (flowerType) {
    case "Roses":
      if (flowerQuantity > 80) {
        price -= flowerQuantity * rosesPrice * 0.1;
      }
      price += flowerQuantity * rosesPrice;
      break;
    case "Dahlias":
      if (flowerQuantity > 90) {
        price -= flowerQuantity * dahliasPrice * 0.15;
      }
      price += flowerQuantity * dahliasPrice;
      break;
    case "Tulips":
      if (flowerQuantity > 80) {
        price -= flowerQuantity * tulipsPrice * 0.15;
      }
      price += flowerQuantity * tulipsPrice;
      break;
    case "Narcissus":
      if (flowerQuantity < 120) {
        price += flowerQuantity * narcissusPrice * 0.15;
      }
      price += flowerQuantity * narcissusPrice;
      break;
    case "Gladiolus":
      if (flowerQuantity < 80) {
        price += flowerQuantity * gladiolusPrice * 0.2;
      }
      price += flowerQuantity * gladiolusPrice;
  }
  if (budget >= price) {
    let moneyLeft = budget - price;
    console.log(
      `Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    let moneyNeeded = price - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
newHouse(["Narcissus", "119", "360"]);
