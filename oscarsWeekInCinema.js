function oscarWeek(input) {
  let filmName = input[0];
  let hallType = input[1];
  let boughtTickets = Number(input[2]);
  let filmProfit = 0;
  switch (hallType) {
    case "normal":
      if (filmName === "A Star Is Born") {
        filmProfit += 7.5 * boughtTickets;
      } else if (filmName === "Bohemian Rhapsody") {
        filmProfit += 7.35 * boughtTickets;
      } else if (filmName === "Green Book") {
        filmProfit += 8.15 * boughtTickets;
      } else {
        filmProfit += 8.75 * boughtTickets;
      }
      break;
    case "ultra luxury":
      if (filmName === "A Star Is Born") {
        filmProfit += 13.5 * boughtTickets;
      } else if (filmName === "Bohemian Rhapsody") {
        filmProfit += 12.75 * boughtTickets;
      } else if (filmName === "Green Book") {
        filmProfit += 13.25 * boughtTickets;
      } else {
        filmProfit += 13.95 * boughtTickets;
      }
      break;
    case "luxury":
      if (filmName === "A Star Is Born") {
        filmProfit += 10.5 * boughtTickets;
      } else if (filmName === "Bohemian Rhapsody") {
        filmProfit += 9.45 * boughtTickets;
      } else if (filmName === "Green Book") {
        filmProfit += 10.25 * boughtTickets;
      } else {
        filmProfit += 11.55 * boughtTickets;
      }
  }
  console.log(`${filmName} -> ${filmProfit.toFixed(2)} lv.`);
}
oscarWeek(["A Star Is Born", "luxury", "42"]);

oscarWeek(["Green Book", "normal", "63"]);

// oscarWeek

// Филм	normal	luxury	ultra luxury
// A Star Is Born	7.50 лв.	10.50 лв.	13.50 лв.
// Bohemian Rhapsody	7.35 лв.	9.45 лв.	12.75 лв.
// Green Book	8.15 лв.	10.25 лв.	13.25 лв.
// The Favourite	8.75 лв.	11.55 лв.	13.95 лв.
