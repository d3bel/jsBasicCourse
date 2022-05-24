function salary(input) {
  let index = 0;
  const tabsOpen = Number(input[index]);
  index++;
  const salary = Number(input[index]);
  index++;
  let penalty = 0;
  let booleanCheck = true;

  for (let tabs = 0; tabs < tabsOpen; tabs++) {
    let currTab = input[index];
    index++;
    switch (currTab) {
      case "Facebook":
        penalty += 150;
        break;
      case "Instagram":
        penalty += 100;
        break;
      case "Reddit":
        penalty += 50;
        break;
    }
    if (penalty >= salary) {
      booleanCheck = false;
      console.log("You have lost your salary.");
      break;
    }
  }
  if (booleanCheck) {
    let salaryLeft = salary - penalty;
    console.log(salaryLeft);
  }
}
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
