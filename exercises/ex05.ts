enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const today: Day = Day.Wednesday;
console.log("Today is:", Day[today]);

interface Race {
  participants: string[];
  first: string;
  second: string;
  third: string;
  day: Day;
}

const race: Race = {
  participants: ["Ana", "Luis", "Carlos"],
  first: "Ana",
  second: "Luis",
  third: "Carlos",
  day: Day.Saturday
};

console.log(race);
