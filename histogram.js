function histogram(input) {
  const n = Number(input[0]);

  let p1 = 0; //p1 са под 200
  let p2 = 0; //друг процент p2 са от 200 до 399
  let p3 = 0; //друг процент p3 са от 400 до 599,
  let p4 = 0; //друг процент p4 са от 600 до 799
  let p5 = 0; //и останалите p5 процента са от 800 нагоре.

  for (let i = 1; i <= n; i++) {
    let ngoes = Number(input[i]);
    if (ngoes < 200) {
      p1 += 1;
    } else if (ngoes <= 399) {
      p2 += 1;
    } else if (ngoes <= 599) {
      p3 += 1;
    } else if (ngoes <= 799) {
      p4 += 1;
    } else {
      p5 += 1;
    }
  }
  console.log(`${((p1 / n) * 100).toFixed(2)}%`);
  console.log(`${((p2 / n) * 100).toFixed(2)}%`);
  console.log(`${((p3 / n) * 100).toFixed(2)}%`);
  console.log(`${((p4 / n) * 100).toFixed(2)}%`);
  console.log(`${((p5 / n) * 100).toFixed(2)}%`);
}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
