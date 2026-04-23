"use strict";
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
const today = Day.Wednesday;
console.log("Today is:", Day[today]);
const race = {
    participants: ["Ana", "Luis", "Carlos"],
    first: "Ana",
    second: "Luis",
    third: "Carlos",
    day: Day.Saturday
};
console.log(race);
