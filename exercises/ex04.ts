type Coordinate = [number, number];

const coordinate: Coordinate = [10, 20];

interface MyLocation {
  description: string;
  coordinate: Coordinate;
}

const loc: MyLocation = {
  description: "My house",
  coordinate
};

console.log(loc);
console.log("X:", loc.coordinate[0], "Y:", loc.coordinate[1]);