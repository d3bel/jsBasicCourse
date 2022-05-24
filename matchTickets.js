function matchTickets(input) {
  const budget = Number(input[0]);
  const categoryTicket = input[1];
  const peoplePerGroup = Number(input[2]);

  const vipTicket = 499.99;
  const normalTicket = 249.99;
  let totalCost = 0;
  switch (categoryTicket) {
    case "VIP":
      totalCost = peoplePerGroup * vipTicket;
      if (peoplePerGroup >= 1 && peoplePerGroup <= 4) {
        totalCost += budget * 0.75;
      } else if (peoplePerGroup >= 5 && peoplePerGroup <= 9) {
        totalCost += budget * 0.6;
      } else if (peoplePerGroup >= 10 && peoplePerGroup <= 24) {
        totalCost += budget * 0.5;
      } else if (peoplePerGroup >= 25 && peoplePerGroup <= 49) {
        totalCost += budget * 0.4;
      } else if (peoplePerGroup >= 50) {
        totalCost += budget * 0.25;
      }
      break;
    case "Normal":
      totalCost = peoplePerGroup * normalTicket;
      if (peoplePerGroup >= 1 && peoplePerGroup <= 4) {
        totalCost += budget * 0.75;
      } else if (peoplePerGroup >= 5 && peoplePerGroup <= 9) {
        totalCost += budget * 0.6;
      } else if (peoplePerGroup >= 10 && peoplePerGroup <= 24) {
        totalCost += budget * 0.5;
      } else if (peoplePerGroup >= 25 && peoplePerGroup <= 49) {
        totalCost += budget * 0.4;
      } else if (peoplePerGroup >= 50) {
        totalCost += budget * 0.25;
      }
      break;
  }
  const finalPrice = Math.abs(totalCost - budget);
  if (totalCost <= budget) {
    console.log(`Yes! You have ${finalPrice.toFixed(2)} leva left.`);
  } else if (totalCost > budget) {
    console.log(`Not enough money! You need ${finalPrice.toFixed(2)} leva.`);
  }
}
matchTickets(["30000", "VIP", "49"]);
