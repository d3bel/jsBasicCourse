function sleepyTomCat(input){
const annualySleep = 30000;
const workPlayTimePerDay = 63;
const offWorkPlayTimePerDay = 127;
const workDaysOff = Number(input[0]);
const daysPerYear = 365;
const workingDays = daysPerYear - workDaysOff;
const playTimeWhenWork = workingDays * workPlayTimePerDay;
const playTimeWhenOffWork = workDaysOff * offWorkPlayTimePerDay;
const totalPlayTimeInMinutes = playTimeWhenOffWork + playTimeWhenWork;
const totalTimeLessForPlay = Math.abs(annualySleep - totalPlayTimeInMinutes);
const inHours = Math.floor(totalTimeLessForPlay / 60);
const inMinutes = totalTimeLessForPlay % 60;
if (totalPlayTimeInMinutes > annualySleep){
    console.log("Tom will run away");
    console.log(`${inHours} hours and ${inMinutes} minutes more for play`);
} else if (totalPlayTimeInMinutes <= annualySleep) {
    console.log("Tom sleeps well");
    console.log(`${inHours} hours and ${inMinutes} minutes less for play`)
    }
}
sleepyTomCat(["20"])
