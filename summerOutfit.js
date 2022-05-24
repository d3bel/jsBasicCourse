function summerOutfit(input) {
  const temperature = Number(input[0]);
  const partOfTheDay = input[1];
  let outfit = "";
  let shoes = "";
  switch (partOfTheDay) {
    case "Morning":
      if (temperature >= 10 && temperature <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (temperature >= 10 && temperature <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (temperature >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      if (temperature >= 10 && temperature <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }
  console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["28", "Evening"]);
