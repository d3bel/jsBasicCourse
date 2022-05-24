function onTimeForTheExam(input) {
  const examHour = Number(input[0]);
  const examMinute = Number(input[1]);
  const arrivalHour = Number(input[2]);
  const arrivalMinute = Number(input[3]);

  const examTimeTotalMinutes = examHour * 60 + examMinute;
  const arrivalTimeTotalMinutes = arrivalHour * 60 + arrivalMinute;
  const timeDifference = Math.abs(examTimeTotalMinutes - arrivalTimeTotalMinutes);
  const hourDifference = Math.floor(timeDifference / 60);
  let minutesDifference = timeDifference % 60;
  if (minutesDifference === 0 || (minutesDifference < 10 && hourDifference > 0)) {
    minutesDifference = `0${minutesDifference}`;
  }
  
  if (examTimeTotalMinutes === arrivalTimeTotalMinutes) {
    console.log("On time");
  } else if (arrivalTimeTotalMinutes > examTimeTotalMinutes && timeDifference < 60) {
    console.log("Late");
    console.log(`${minutesDifference} minutes after the start`);
  } else if (arrivalTimeTotalMinutes > examTimeTotalMinutes && timeDifference >= 60) {
    console.log("Late");
    console.log(`${hourDifference}:${minutesDifference} hours after the start`);
  } else if (timeDifference <= 30) {
    console.log("On time");
    console.log(`${minutesDifference} minutes before the start`);
  } else if (timeDifference > 30 && timeDifference < 60) {
    console.log("Early");
    console.log(`${minutesDifference} minutes before the start`);
  } else {
    console.log("Early");
    console.log(`${hourDifference}:${minutesDifference} hours before the start`);
  }
}
// onTimeForTheExam(["9", "30", "9", "50"]);
// onTimeForTheExam(["11", "30", "12", "29"]);
// onTimeForTheExam(["10", "00", "10", "00"]);
// onTimeForTheExam(["14", "00", "13", "55"]);
// onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["16", "00", "15", "00"]);
