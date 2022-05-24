function wheatherForecast(input) {
  let temp = Number(input[0]);

  if (temp < 5.0 || temp > 35.0) {
    console.log("unknown");
  } else if (temp >= 5.0 && temp <= 11.9) {
    console.log("Cold");
  } else if (temp >= 12.0 && temp <= 14.9) {
    console.log("Cool");
  } else if (temp >= 15.0 && temp <= 20.0) {
    console.log("Mild");
  } else if (temp >= 20.1 && temp <= 25.9) {
    console.log("Warm");
  } else if (temp >= 26.0 && temp <= 35.0) {
    console.log("Hot");
  }
}
wheatherForecast(["29"]);

//26.00 - 35.00	Hot
//20.1 - 25.9	Warm
//15.00 - 20.00	Mild
//12.00 - 14.9	Cool
//5.00 - 11.9	Cold
