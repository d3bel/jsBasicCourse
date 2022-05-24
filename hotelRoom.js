function hotelRoom(input) {
  const season = input[0];
  const bookedNights = Number(input[1]);
  const priceStudioMayOctober = 50;
  const priceStudioJuneSeptember = 75.2;
  const priceStudioJulyAugust = 76;
  const priceApartmentMayOctober = 65;
  const priceApartmentJuneSeptember = 68.7;
  const priceApartmentJulyAugust = 77;
  let priceApartment = 0;
  let priceStudio = 0;
  switch (season) {
    case "May":
    case "October":
      priceApartment = bookedNights * priceApartmentMayOctober;
      priceStudio = bookedNights * priceStudioMayOctober;
      if (bookedNights > 7 && bookedNights < 14) {
        priceStudio *= 0.95;
      } else if (bookedNights > 14) {
        priceStudio *= 0.7;
        priceApartment *= 0.9;
      }
      break;
    case "June":
    case "September":
      priceApartment = bookedNights * priceApartmentJuneSeptember;
      priceStudio = bookedNights * priceStudioJuneSeptember;
      if (bookedNights > 14) {
        priceStudio *= 0.8;
        priceApartment *= 0.9;
      }
      break;
    case "July":
    case "August":
      priceApartment = bookedNights * priceApartmentJulyAugust;
      priceStudio = bookedNights * priceStudioJulyAugust;
      if (bookedNights > 14) {
        priceApartment *= 0.9;
      }
      break;
  }
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
// hotelRoom(["June", "14"]);
// hotelRoom(["August", "20"]);
